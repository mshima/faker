import { describe, expect, it } from 'vitest';
import allLocales from '../src/locales';

describe('locale imports', () => {
  for (const locale in allLocales) {
    it(`should be possible to directly require('@faker-js/faker/locale/${locale}')`, () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const exportedFaker = require(`@faker-js/faker/locale/${locale}`);
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const distFaker = require(`../dist/cjs/locale/${locale}`);

      expect(exportedFaker).toBeDefined();
      expect(exportedFaker).toBe(distFaker);
      expect(exportedFaker.locale).toBe(locale);
    });

    it(`should be possible to directly import('@faker-js/faker/locale/${locale}')`, async () => {
      const faker = (await import(`../dist/esm/locale/${locale}`)).default;

      expect(faker).toBeDefined();
      expect(faker.locale).toBe(locale);
    });

    it(`should be possible to directly require('@faker-js/faker/locales/${locale}')`, () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const exportedLocale = require(`@faker-js/faker/locales/${locale}`);
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const internalLocale = require(`../dist/cjs/locales/${locale}`);

      expect(exportedLocale).toBeDefined();
      expect(exportedLocale).toBe(internalLocale);
    });
  }
});
