import { buildSync } from 'esbuild';
import { sync as globSync } from 'glob';
import { mkdirSync, writeFileSync } from 'node:fs';
import locales from '../src/locales';

console.log('Building dist for node (cjs)...');

// Generate esm package.json at dist/esm
mkdirSync('dist/esm', { recursive: true });
writeFileSync(
  'dist/esm/package.json',
  `{
  "type": "module"
}

`,
  { encoding: 'utf8' }
);

const entryPoints = [
  './src/index.ts',
  ...Object.keys(locales)
    .map((locale) => [
      `./src/locale/${locale}.ts`,
      `./src/locales/${locale}/index.ts`,
    ])
    .flat(),
  './src/locales/index.ts',
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
  format: 'cjs',
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
