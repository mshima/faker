/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const allLocales = require('@faker-js/faker/locales');
console.log(allLocales);
console.log(require('@faker-js/faker/locale/en'));

describe('locale imports', () => {
  for (const locale of Object.keys(allLocales)) {
    it(`should be possible to directly require('@faker-js/faker/locale/${locale}')`, () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const faker = require(`../dist/cjs/locale/${locale}`);

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
