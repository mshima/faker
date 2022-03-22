import { describe, expect, it } from 'vitest';
import allLocales from '../dist/esm/locales/index.js';

describe('locale imports', () => {
  for (const locale of Object.keys(allLocales)) {
    it(`should be possible to directly import('@faker-js/faker/locale/${locale}')`, async () => {
      const faker = (await import(`../dist/esm/locale/${locale}`)).default;

      expect(faker).toBeDefined();
      expect(faker.locale).toBe(locale);
    });

    it(`should be possible to directly import('@faker-js/faker/locales/${locale}')`, async () => {
      const localeDefinition = (await import(`../dist/esm/locales/${locale}`))
        .default;

      expect(localeDefinition).toBeDefined();
      expect(localeDefinition.title).toBeDefined();
    });
  }
});
