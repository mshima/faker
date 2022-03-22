import { buildSync } from 'esbuild';
import { sync as globSync } from 'glob';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import locales from '../src/locales';

console.log('Building dist for node (cjs)...');

// Generate entry-points for cjs compatibility
const localeDir = 'locale';
const localesDir = 'locales';
if (existsSync(localeDir)) {
  rmSync(localeDir, { recursive: true, force: true });
}
if (existsSync(localesDir)) {
  rmSync(localesDir, { recursive: true, force: true });
}
mkdirSync(localeDir);
mkdirSync(localesDir);
for (const locale of Object.keys(locales)) {
  writeFileSync(
    `${localeDir}/${locale}.js`,
    `module.exports = require('../dist/cjs/locale/${locale}');\n`,
    { encoding: 'utf8' }
  );
  writeFileSync(
    `${localesDir}/${locale}.js`,
    `module.exports = require('../dist/cjs/locales/${locale}').default;\n`,
    { encoding: 'utf8' }
  );
}

const entryPoints = [
  './src/index.ts',
  ...Object.keys(locales)
    .map((locale) => [
      `./src/locale/${locale}.ts`,
      `./src/locales/${locale}/index.ts`,
    ])
    .flat(),
  './src/iban.ts',
  './src/mersenne.ts',
];

buildSync({
  entryPoints: globSync('./src/**/*.ts'),
  // We can use the following entry points when esbuild supports cjs+splitting
  // entryPoints: [
  //   './src/index.ts',
  //   ...Object.keys(locales).map((locale) => `./src/locale/${locale}.ts`),
  //   './src/iban.ts',
  //   './src/mersenne.ts',
  // ],
  outdir: './dist/cjs',
  bundle: false, // Creates 390MiB bundle ...
  sourcemap: false,
  minify: true,
  // splitting: true, // Doesn't work with cjs
  format: 'cjs',
  platform: 'node',
  target: 'node12',
});

console.log('Building dist for node type=module (esm)...');
buildSync({
  entryPoints,
  outdir: './dist/esm',
  bundle: true,
  sourcemap: false,
  minify: true,
  splitting: true,
  format: 'esm',
  target: 'node12.20',
});
