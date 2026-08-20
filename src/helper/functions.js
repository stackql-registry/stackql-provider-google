import { logger } from '../util/logging.js';
import {
  getResource,
  getSQLVerb,
  getObjectKey,
  getMethodName,
} from '../config/tagging.js';
import {
  mediaDownloadMethods,
  mediaUploadMethods,
  mediaMethodEntryOverrides,
} from '../config/media.js';
import { isParamRequired } from './reqparams.js';

/*
*  helper functions 
*/

function getOpParams(method, paramOrder, path, verb) {
    const inParams = method['parameters'];
    const paramList = [];
    for (const param of paramOrder) {
      if (param in inParams) {
        paramList.push({ ...inParams[param], name: param });
      }
    }
    // remaining params sorted by name: discovery docs are served with
    // nondeterministic JSON key order, and parameter lists are arrays so
    // yaml key sorting cannot stabilise them
    for (const param of Object.keys(inParams).filter((p) => !paramOrder.includes(p)).sort()) {
      paramList.push({ ...inParams[param], name: param });
    }
    const paramListFinal = [];
    // add path params
    for (const token of path.split('/')) {
      if (token.startsWith('{')) {
        const finalParam = {};
        finalParam['in'] = 'path';
        finalParam['name'] = token.replace('{', '').replace('}', '').split(':')[0];
        finalParam['required'] = true;
        finalParam['schema'] = { type: 'string' };
        paramListFinal.push(finalParam);
      }
    }
    // add non path
    for (const param of paramList) {
      if (param['location'] !== 'path') {
        const finalParam = {};
        finalParam['in'] = param['location'];
        finalParam['name'] = param['name'];
        if ('required' in param) {
          finalParam['required'] = param['required'];
        } else {
          // check if required
          if(isParamRequired(path, param, verb)) {
            finalParam['required'] = true;
          }
        }
        finalParam['schema'] = { type: param['type'], format: param['format'] };
        paramListFinal.push(finalParam);
      }
    }
    return paramListFinal;
}

function getResponse(respSchema) {
    return {
      '200': {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: {
              '$ref': `#/components/schemas/${respSchema}`,
            },
          },
        },
      },
    };
}

function getEmptyResponse() {
  return {
    '204': {
      description: 'No Content'
    }
  };
}
    
function getMethodScopes(obj) {
    const scopes = [];
    if ('scopes' in obj) {
      for (const scope of obj['scopes']) {
        scopes.push({
          Oauth2: [scope],
          Oauth2c: [scope],
        });
      }
    }
    return scopes;
}

function getValidPath(path) {
    if (path.startsWith('/')) {
      return path;
    } else {
      return `/${path}`;
    }
}
  
function processMethods(pathsObj, methodsObj, paramsRefList, debug) {
    for (const method in methodsObj) {
      debug ? logger.debug(`Processing method: ${method}...`) : null;
      let path;
      if ('flatPath' in methodsObj[method]) {
        path = getValidPath(methodsObj[method]['flatPath']);
      } else if ('path' in methodsObj[method]) {
        path = getValidPath(methodsObj[method]['path']);
      } else {
        throw new Error(`Method ${method} has no path`);
      }
      const verb = methodsObj[method]['httpMethod'].toLowerCase();
      let description;
      if ('description' in methodsObj[method]) {
        description = methodsObj[method]['description'];
      } else {
        description = '';
      }
      const operationId = methodsObj[method]['id'];
  
      // update path - when the flatPath second segment is a synthetic
      // `{<version>Id}` token (name-based APIs where the parent type is a
      // free segment), fall back to the un-flat discovery path with the
      // RFC6570 reserved-expansion markers removed. The `:verb` suffix of
      // custom methods is KEPT: it is part of the real URL, and stripping it
      // used to collapse sibling methods (get/enable/disable etc.) onto one
      // path key where the last-processed method silently won - dependent on
      // the (nondeterministic) key order of the served discovery doc
      const version = path.split('/')[1];
      if (path.split('/').length > 2) {
        if (path.split('/')[2] === `{${version}Id}`) {
          path = getValidPath(methodsObj[method]['path']).replace(/\+/g, '');
        }
      }

      // fix for serviceusage, cloudasset, etc
      if (path.includes('{parent}')) {
        path = path.replace('{parent}', '{parentType}/{parent}');
      }
      
      if (!(path in pathsObj)) {
        debug ? logger.debug(`Adding ${path} path and global params...`) : null;
        pathsObj[path] = { parameters: paramsRefList };
      }

      // (path, verb) collision guard: some name-based APIs expose multiple
      // discovery methods with genuinely identical URLs (e.g. logging
      // buckets.get / views.get / exclusions.get are all GET v2/{+name}).
      // OpenAPI path keys must be unique, so only one can be emitted - keep
      // the lexicographically smallest operationId so the winner is
      // deterministic across regenerations (discovery docs are served with
      // nondeterministic JSON key order), and report the drop. Representing
      // the dropped siblings needs path aliasing support in stackql core.
      const existingOp = pathsObj[path][verb];
      if (existingOp && existingOp.operationId !== operationId) {
        if (existingOp.operationId < operationId) {
          logger.warn(`path collision: dropping ${operationId} (${verb.toUpperCase()} ${path} retained by ${existingOp.operationId})`);
          continue;
        }
        logger.warn(`path collision: dropping ${existingOp.operationId} (${verb.toUpperCase()} ${path} retained by ${operationId})`);
      }

      debug ? logger.debug(`Adding ${verb} verb...`) : null;
      pathsObj[path][verb] = { description: description, operationId: operationId };
      if ('request' in methodsObj[method]) {
        const reqRef = methodsObj[method]['request']['$ref'];

        // wierd one with a datalineage post method...
        if(reqRef) {
          pathsObj[path][verb]['requestBody'] = {
            content: {
              'application/json': {
                schema: {
                  '$ref': `#/components/schemas/${reqRef}`,
                },
              },
            },
          };
        } else {
          logger.warn(`No req body for ${path}:${verb}...`)
        }
      }
      pathsObj[path][verb]['security'] = getMethodScopes(methodsObj[method]);
      if ('response' in methodsObj[method]) {
        pathsObj[path][verb]['responses'] = getResponse(methodsObj[method]['response']['$ref']);
      } else {
        pathsObj[path][verb]['responses'] = getEmptyResponse();
      }
      const parameterOrder = 'parameterOrder' in methodsObj[method] ? methodsObj[method]['parameterOrder'] : [];
      if ('parameters' in methodsObj[method]) {
        pathsObj[path][verb]['parameters'] = getOpParams(methodsObj[method], parameterOrder, path, verb);
      }
    }
    return pathsObj;
}
    
// find a converted operation in the paths object by operationId
function findOperationByOperationId(pathsObj, operationId) {
    for (const path of Object.keys(pathsObj)) {
      for (const verb of Object.keys(pathsObj[path])) {
        if (verb !== 'parameters' && pathsObj[path][verb].operationId === operationId) {
          return pathsObj[path][verb];
        }
      }
    }
    return null;
}

/*
*  exported functions
*/

/*
 * Synthesise raw media (object content) download/upload methods for
 * operations advertising supportsMediaDownload/supportsMediaUpload in the
 * discovery doc, gated to the allowlist in config/media.js (storage only).
 * Each synthetic path entry carries an operation-level servers block
 * (the media endpoints live under the service rootUrl, outside the
 * rootUrl + servicePath base in the document-level servers block) and a
 * path key with the pinning query string baked in (?alt=media /
 * ?uploadType=media) - stackql resolves query-string-in-path keys and
 * appends further query params with '&'.
 */
export function addMediaMethods(openApiDoc, serviceData, service, debug) {
    const downloads = mediaDownloadMethods[service] || {};
    const uploads = mediaUploadMethods[service] || {};

    if (Object.keys(downloads).length === 0 && Object.keys(uploads).length === 0) {
      return openApiDoc;
    }

    const pathsObj = openApiDoc['paths'];
    const rootUrl = serviceData.rootUrl.replace(/\/+$/, '');
    const servicePath = serviceData.servicePath;

    // index the discovery methods by operationId
    const discoveryMethods = {};
    const walk = (node) => {
      if (!node || typeof node !== 'object') {
        return;
      }
      if (node.methods) {
        for (const m of Object.values(node.methods)) {
          if (m.id) {
            discoveryMethods[m.id] = m;
          }
        }
      }
      if (node.resources) {
        Object.values(node.resources).forEach(walk);
      }
    };
    walk({ resources: serviceData.resources });

    for (const [sourceOpId, cfg] of Object.entries(downloads)) {
      const discoveryMethod = discoveryMethods[sourceOpId];
      if (!discoveryMethod || !discoveryMethod.supportsMediaDownload) {
        logger.warn(`media download source ${sourceOpId} not found or does not support media download, skipping...`);
        continue;
      }
      const sourceOp = findOperationByOperationId(pathsObj, sourceOpId);
      if (!sourceOp) {
        logger.warn(`converted operation ${sourceOpId} not found in paths, skipping media download...`);
        continue;
      }
      // preferred media endpoint per useMediaDownloadService: /download/<servicePath><path>
      const mediaPath = `/download/${servicePath}${discoveryMethod.path}?alt=media`;
      debug ? logger.debug(`adding media download path ${mediaPath} (${cfg.operationId})...`) : null;
      pathsObj[mediaPath] = {
        get: {
          description: cfg.description,
          operationId: cfg.operationId,
          servers: [{ url: rootUrl }],
          security: JSON.parse(JSON.stringify(sourceOp.security || [])),
          responses: {
            '200': {
              description: 'The raw content of the object.',
              content: {
                'application/octet-stream': {
                  schema: {
                    type: 'object',
                    properties: {
                      contents: {
                        description: 'The text content of the object.',
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
          parameters: JSON.parse(JSON.stringify(sourceOp.parameters || [])),
        },
      };
    }

    for (const [sourceOpId, cfg] of Object.entries(uploads)) {
      const discoveryMethod = discoveryMethods[sourceOpId];
      const simplePath = discoveryMethod
        && discoveryMethod.supportsMediaUpload
        && discoveryMethod.mediaUpload
        && discoveryMethod.mediaUpload.protocols
        && discoveryMethod.mediaUpload.protocols.simple
        && discoveryMethod.mediaUpload.protocols.simple.path;
      if (!simplePath) {
        logger.warn(`media upload source ${sourceOpId} not found or has no simple upload path, skipping...`);
        continue;
      }
      const sourceOp = findOperationByOperationId(pathsObj, sourceOpId);
      if (!sourceOp) {
        logger.warn(`converted operation ${sourceOpId} not found in paths, skipping media upload...`);
        continue;
      }
      const mediaPath = `${getValidPath(simplePath)}?uploadType=media`;
      debug ? logger.debug(`adding media upload path ${mediaPath} (${cfg.operationId})...`) : null;

      // SQL-facing request body shape (referenced via request.schema_override)
      openApiDoc['components']['schemas'][cfg.bodySchemaName] = {
        type: 'object',
        required: ['contents'],
        properties: {
          contents: {
            description: 'The text content of the object. Text (non-binary) content only.',
            type: 'string',
          },
        },
      };

      const parameters = JSON.parse(JSON.stringify(sourceOp.parameters || []));
      for (const param of parameters) {
        if ((cfg.requiredParams || []).includes(param.name)) {
          param.required = true;
        }
      }

      pathsObj[mediaPath] = {
        post: {
          description: cfg.description,
          operationId: cfg.operationId,
          servers: [{ url: rootUrl }],
          security: JSON.parse(JSON.stringify(sourceOp.security || [])),
          // the declared schema is the SQL-facing contract (drives SHOW
          // INSERT and docgen columns); the actual wire body is the raw
          // contents string produced by the request transform
          requestBody: {
            required: true,
            content: {
              'application/octet-stream': {
                schema: {
                  '$ref': `#/components/schemas/${cfg.bodySchemaName}`,
                },
              },
            },
          },
          responses: JSON.parse(JSON.stringify(sourceOp.responses)),
          parameters: parameters,
        },
      };
    }

    return openApiDoc;
}

export function generateStackQLResources(provider, openapiDoc, service, debug) {
  const schemasObj = openapiDoc['components']['schemas'];
  const xStackQLResources = {};

  for (const path of Object.keys(openapiDoc.paths)) {
      for (const verb of Object.keys(openapiDoc.paths[path])) {
          if (verb !== 'parameters') {
              const operationId = openapiDoc.paths[path][verb].operationId;
              const operationObj = openapiDoc.paths[path][verb];
              const [resource, action] = getResource(service, operationId, debug);

              if (resource === 'skip_this_resource') {
                  continue;
              }

              const methodName = getMethodName(service, operationId, debug);
              const sqlVerb = getSQLVerb(service, resource, action, operationId, path, verb, operationObj, schemasObj, debug);
              const numPathParams = path.split('/').filter(token => token.startsWith('{')).length;
              const objectKey = getObjectKey(openapiDoc, service, operationId, debug);

              if (!xStackQLResources[resource]) {
                  xStackQLResources[resource] = {
                      id: `${provider === 'googleapis.com' ? 'google' : provider}.${service}.${resource}`,
                      name: resource,
                      title: resource.charAt(0).toUpperCase() + resource.slice(1),
                      methods: {},
                      sqlVerbs: {
                          select: [],
                          insert: [],
                          update: [],
                          replace: [],
                          delete: [],
                      }
                  };
              }

              const methodRef = `#/paths/${path.replace(/\//g, '~1')}/${verb}`;
              const methodEntry = {
                  operation: {
                      $ref: methodRef,
                  },
                  response: {
                      mediaType: 'application/json',
                      openAPIDocKey: '200',
                  }
              };

              // NOTE: do not blanket-apply config.requestBodyTranslate (algorithm: naive)
              // to mutation methods - it breaks operations whose required params are
              // query parameters (e.g. storage.buckets.insert 'project'), verified by
              // the smoke test. The published provider has no such config.

              objectKey ? methodEntry.response.objectKey = objectKey : null;

              // synthesised media methods carry their own request/response
              // blocks (raw body transforms - see config/media.js)
              const mediaOverride = mediaMethodEntryOverrides[service] && mediaMethodEntryOverrides[service][operationId];
              if (mediaOverride) {
                  if (mediaOverride.response) {
                      methodEntry.response = mediaOverride.response;
                  }
                  if (mediaOverride.request) {
                      methodEntry.request = mediaOverride.request;
                  }
              }

              // if (objectKey) {
              //     methodEntry.response.objectKey = objectKey;
              //     xStackQLResources[resource].methods[`_${methodName}`] = {
              //         ...methodEntry
              //     };
              // }

              xStackQLResources[resource].methods[methodName] = methodEntry;

              if (sqlVerb && sqlVerb !== 'exec') {
                  xStackQLResources[resource].sqlVerbs[sqlVerb].push({
                      $ref: `#/components/x-stackQL-resources/${resource}/methods/${methodName} [${numPathParams}]`
                  });
              }

              // a method can serve more than one SQL verb (e.g. media upload
              // is create-or-overwrite, so INSERT and REPLACE)
              if (mediaOverride && mediaOverride.additionalSqlVerbs) {
                  for (const additionalVerb of mediaOverride.additionalSqlVerbs) {
                      xStackQLResources[resource].sqlVerbs[additionalVerb].push({
                          $ref: `#/components/x-stackQL-resources/${resource}/methods/${methodName} [${numPathParams}]`
                      });
                  }
              }
          }
      }
  }

  // For each resource, order each sqlVerb from most specific to least specific
  for (const resource in xStackQLResources) {
    for (const verb in xStackQLResources[resource].sqlVerbs) {
        // Sort the sqlVerbs based on the number of path parameters
        // (most specific first); tie-break on the method ref so routing
        // precedence is deterministic across regenerations (insertion order
        // follows the discovery doc's nondeterministic key order)
        xStackQLResources[resource].sqlVerbs[verb] = xStackQLResources[resource].sqlVerbs[verb]
            .sort((a, b) => {
                const aNumPathParams = parseInt(a.$ref.split('[')[1].split(']')[0]);
                const bNumPathParams = parseInt(b.$ref.split('[')[1].split(']')[0]);
                if (bNumPathParams !== aNumPathParams) {
                    return bNumPathParams - aNumPathParams;
                }
                return a.$ref.localeCompare(b.$ref);
            })
            .map(ref => {
                return { $ref: ref.$ref.split(' [')[0] };
            });

        // Remove duplicates while preserving order
        const uniqueRefs = new Set();
        xStackQLResources[resource].sqlVerbs[verb] = xStackQLResources[resource].sqlVerbs[verb].filter(ref => {
            if (!uniqueRefs.has(ref.$ref)) {
                uniqueRefs.add(ref.$ref);
                return true;
            }
            return false;
        });
    }
  }

  openapiDoc['components']['x-stackQL-resources'] = xStackQLResources;
  return openapiDoc;
}

export function populatePaths(pathsObj, obj, paramsRefList, debug) {
    for (const key in obj) {
      if (obj[key] instanceof Object) {
        if (key === 'methods') {
          pathsObj = processMethods(pathsObj, obj[key], paramsRefList, debug);
        }
        populatePaths(pathsObj, obj[key], paramsRefList, debug);
      } else if (Array.isArray(obj[key])) {
        for (const item of obj[key]) {
          if (item instanceof Object) {
            populatePaths(pathsObj, item, paramsRefList, debug);
          }
        }
      } else if (typeof obj[key] === 'string') {
        // do nothing
      }
    }
    return pathsObj;
}
  
export function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function populateSecuritySchemes(authObj) {
    const securitySchemes = {};
    const scopesSource = authObj['oauth2']['scopes'];
    const scopesTarget = {};
    const authorizationUrl = 'https://accounts.google.com/o/oauth2/auth';
    const tokenUrl = 'https://accounts.google.com/o/oauth2/token';
  
    // reformat scopes
    for (const scope in scopesSource) {
      scopesTarget[scope] = scopesSource[scope]['description'];
    }
  
    // create implicit flow security scheme
    securitySchemes['Oauth2'] = {};
    securitySchemes['Oauth2']['type'] = 'oauth2';
    securitySchemes['Oauth2']['description'] = 'Oauth 2.0 implicit authentication';
    securitySchemes['Oauth2']['flows'] = {};
    securitySchemes['Oauth2']['flows']['implicit'] = {};
    securitySchemes['Oauth2']['flows']['implicit']['authorizationUrl'] = authorizationUrl;
    securitySchemes['Oauth2']['flows']['implicit']['scopes'] = scopesTarget;
  
    // create authorization code flow security scheme
    securitySchemes['Oauth2c'] = {};
    securitySchemes['Oauth2c']['type'] = 'oauth2';
    securitySchemes['Oauth2c']['description'] = 'Oauth 2.0 authorization code authentication';
    securitySchemes['Oauth2c']['flows'] = {};
    securitySchemes['Oauth2c']['flows']['authorizationCode'] = {};
    securitySchemes['Oauth2c']['flows']['authorizationCode']['authorizationUrl'] = authorizationUrl;
    securitySchemes['Oauth2c']['flows']['authorizationCode']['tokenUrl'] = tokenUrl;
    securitySchemes['Oauth2c']['flows']['authorizationCode']['scopes'] = scopesTarget;
  
    return securitySchemes;
}

export function replaceSchemaRefs(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        // NOTE: do not hoist $ref out of additionalProperties for map-typed 'items'
        // properties (aggregated list responses) - the map wrapper is required for
        // objectKey paths like $.items[*].instances[*] to resolve (see smoke test)
        replaceSchemaRefs(obj[key]);
      } else if (Array.isArray(obj[key])) {
        for (const item of obj[key]) {
          if (typeof item === 'object') {
            replaceSchemaRefs(item);
          }
        }
      } else if (typeof obj[key] === 'string') {
        if (key === '$ref') {
          obj[key] = `#/components/schemas/${obj[key]}`;
        }
      }
    }
    return obj;
}

export function processParameters(inputParams) {
    const paramsObj = {};
    const paramsRefList = [];
    // sorted for reproducible output - the discovery doc's parameters map is
    // served with nondeterministic JSON key order and the shared path-level
    // ref list is an array, which yaml key sorting cannot stabilise
    for (const key of Object.keys(inputParams).sort()) {
      paramsRefList.push({ '$ref': `#/components/parameters/${key.replace('$.', '_.')}` });
  
      let schemaObj;
      if ('enum' in inputParams[key]) {
        schemaObj = {
          type: inputParams[key]['type'],
          enum: inputParams[key]['enum'],
        };
      } else if ('format' in inputParams[key]) {
        schemaObj = {
          type: inputParams[key]['type'],
          format: inputParams[key]['format'],
        };
      } else {
        schemaObj = {
          type: inputParams[key]['type'],
        };
      }
  
      paramsObj[key.replace('$.', '_.')] = {
        description: inputParams[key]['description'],
        in: inputParams[key]['location'],
        name: key,
        schema: schemaObj,
      };
    }
    return [paramsObj, paramsRefList];
}