#!/usr/bin/env node
/*
 * Escapes literal curly braces in generated markdown as HTML entities so MDX
 * (docusaurus v3) does not parse them as JSX expressions - e.g. discovery doc
 * descriptions like `{ map_value: { "x&y" : ... }}` otherwise fail the build
 * with "Could not parse expression with acorn".
 *
 * Braces are left untouched inside: frontmatter, fenced code blocks, inline
 * code spans (unescaped backticks) and single-line JSX/HTML tags - all places
 * where braces are already safe and entities would render literally.
 *
 * Usage: node bin/fix-mdx-braces.mjs <docs-dir>
 */

import * as fs from 'fs';
import * as path from 'path';

const docsDir = process.argv[2];
if (!docsDir || !fs.existsSync(docsDir)) {
    console.error('usage: node bin/fix-mdx-braces.mjs <docs-dir>');
    process.exit(1);
}

// docgen emits <CodeBlock>{`...`}</CodeBlock> children as JS template literals,
// but its escaping can produce sequences like \\` (escaped backslash + bare
// backtick) that terminate the literal early and break MDX parsing. Decode the
// escaping and re-encode it canonically so the literal is always valid.
function fixCodeBlockLiterals(content) {
    return content.replace(/(<CodeBlock[^>]*>)\{`([\s\S]*?)`\}(<\/CodeBlock>)/g, (m, open, inner, close) => {
        const decoded = inner.replace(/\\([\s\S])/g, '$1');
        const encoded = decoded
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`')
            .replace(/\$\{/g, '\\${');
        return `${open}{\`${encoded}\`}${close}`;
    });
}

function escapeBraces(content) {
    content = fixCodeBlockLiterals(content);
    const placeholders = [];
    const stash = (match) => {
        placeholders.push(match);
        return `\u0000${placeholders.length - 1}\u0000`;
    };

    let out = content
        // frontmatter
        .replace(/^---\n[\s\S]*?\n---/, stash)
        // whole <CodeBlock>...</CodeBlock> components - their children are a JSX
        // template-literal expression ({`...`}) that must stay intact
        .replace(/<CodeBlock[^>]*>[\s\S]*?<\/CodeBlock>/g, stash)
        // fenced code blocks
        .replace(/```[\s\S]*?```/g, stash)
        // double-backtick inline code (unescaped delimiters)
        .replace(/(?<!\\)``(?:(?!``)[\s\S])*?``/g, stash)
        // single-backtick inline code (escaped chars allowed inside)
        .replace(/(?<!\\)`(?:[^`\\\n]|\\.)*?`/g, stash)
        // JSX component tags (capitalized, may span lines with brace-expression
        // attributes, e.g. <Tabs values={[...]}> emitted by docgen)
        .replace(/<\/?[A-Z][^<>]*>/g, stash)
        // single-line html tags (quoted attributes are safe in MDX)
        .replace(/<\/?[a-z][^>\n]*>/g, stash);

    out = out.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

    // restore iteratively - stashed segments can contain earlier placeholders
    // (e.g. a code span nested inside a stashed fence or frontmatter)
    while (/\u0000(\d+)\u0000/.test(out)) {
        out = out.replace(/\u0000(\d+)\u0000/g, (_, i) => placeholders[Number(i)]);
    }
    return out;
}

let changed = 0;
let scanned = 0;

function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(full);
        } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
            scanned++;
            const content = fs.readFileSync(full, 'utf8');
            const fixed = escapeBraces(content);
            if (fixed !== content) {
                fs.writeFileSync(full, fixed, 'utf8');
                changed++;
            }
        }
    }
}

walk(docsDir);
console.log(`fix-mdx-braces: scanned ${scanned} files, fixed ${changed} in ${docsDir}`);
