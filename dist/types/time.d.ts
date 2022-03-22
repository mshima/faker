import type { LiteralUnion } from './faker';
/**
 * Module to generate time of dates in various formats.
 */
export declare class Time {
    /**
     * Returns recent time.
     *
     * @param format The format to use. Defaults to `'unix'`.
     *
     * - `'abbr'` Return a string with only the time. `Date.toLocaleTimeString`.
     * - `'date'` Return a date instance.
     * - `'wide'` Return a string with a long time. `Date.toTimeString()`.
     * - `'unix'` Returns a unix timestamp.
     *
     * @example
     * faker.time.recent() // 1643067231856
     * faker.time.recent('abbr') // '12:34:07 AM'
     * faker.time.recent('date') // 2022-03-01T20:35:47.402Z
     * faker.time.recent('wide') // '00:34:11 GMT+0100 (Central European Standard Time)'
     * faker.time.recent('unix') // 1643067231856
     */
    recent(format?: LiteralUnion<'abbr' | 'date' | 'wide' | 'unix'>): string | number | Date;
}
