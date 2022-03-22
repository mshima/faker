import type { Faker } from '.';
/**
 * A full card with various details.
 */
export interface Card {
    name: string;
    username: string;
    email: string;
    address: {
        streetA: string;
        streetB: string;
        streetC: string;
        streetD: string;
        city: string;
        state: string;
        country: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    posts: Array<{
        words: string;
        sentence: string;
        sentences: string;
        paragraph: string;
    }>;
    accountHistory: Array<{
        amount: string;
        date: Date;
        business: string;
        name: string;
        type: string;
        account: string;
    }>;
}
/**
 * A persons card with various details attempting to use a consistent context.
 */
export interface ContextualCard {
    name: string;
    username: string;
    avatar: string;
    email: string;
    dob: Date;
    phone: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
/**
 * A user card with various details.
 */
export interface UserCard {
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
/**
 * A transaction info.
 */
export interface Transaction {
    amount: string;
    date: Date;
    business: string;
    name: string;
    type: string;
    account: string;
}
/**
 * Module with various helper methods that don't fit in a particular category.
 */
export declare class Helpers {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Backward-compatibility. Use `faker.random.arrayElement()` instead.
     *
     * Takes an array and returns a random element of the array.
     *
     * @template T The type of the entries to pick from.
     * @param array The array to select an element from.
     *
     * @see faker.random.arrayElement()
     *
     * @example
     * faker.helpers.randomize() // 'c'
     * faker.helpers.randomize([1, 2, 3]) // '2'
     *
     * @deprecated
     */
    randomize<T = string>(array?: ReadonlyArray<T>): T;
    /**
     * Slugifies the given string.
     * For that all spaces (` `) are replaced by hyphens (`-`)
     * and most non word characters except for dots and hyphens will be removed.
     *
     * @param string The input to slugify.
     *
     * @example
     * faker.helpers.slugify() // ''
     * faker.helpers.slugify("Hello world!") // 'Hello-world'
     */
    slugify(string?: string): string;
    /**
     * Parses the given string symbol by symbol and replaces the placeholders with digits (`0` - `9`).
     * `!` will be replaced by digits >=2 (`2` - `9`).
     *
     * @param string The template string to parse.
     * @param symbol The symbol to replace with digits. Defaults to `'#'`.
     *
     * @example
     * faker.helpers.replaceSymbolWithNumber() // ''
     * faker.helpers.replaceSymbolWithNumber('#####') // '04812'
     * faker.helpers.replaceSymbolWithNumber('!####') // '27378'
     * faker.helpers.replaceSymbolWithNumber('Your pin is: !####') // '29841'
     */
    replaceSymbolWithNumber(string?: string, symbol?: string): string;
    /**
     * Parses the given string symbol by symbols and replaces the placeholder appropriately.
     *
     * - `#` will be replaced with a digit (`0` - `9`).
     * - `?` will be replaced with an upper letter ('A' - 'Z')
     * - and `*` will be replaced with either a digit or letter.
     *
     * @param string The template string to parse.
     *
     * @example
     * faker.helpers.replaceSymbols() // ''
     * faker.helpers.replaceSymbols('#####') // '98441'
     * faker.helpers.replaceSymbols('?????') // 'ZYRQQ'
     * faker.helpers.replaceSymbols('*****') // '4Z3P7'
     * faker.helpers.replaceSymbols('Your pin is: #?*#?*') // '0T85L1'
     */
    replaceSymbols(string?: string): string;
    /**
     * Replaces the symbols and patterns in a credit card schema including Luhn checksum.
     *
     * This method supports both range patterns `[4-9]` as well as the patterns used by `replaceSymbolWithNumber()`.
     * `L` will be replaced with the appropriate Luhn checksum.
     *
     * @param string The credit card format pattern. Defaults to `6453-####-####-####-###L`.
     * @param symbol The symbol to replace with a digit.
     *
     * @example
     * faker.helpers.replaceCreditCardSymbols() // '6453-4876-8626-8995-3779'
     * faker.helpers.replaceCreditCardSymbols('1234-[4-9]-##!!-L') // '1234-9-5298-2'
     */
    replaceCreditCardSymbols(string?: string, symbol?: string): string;
    /**
     * Repeats the given string the given number of times.
     *
     * @param string The string to repeat. Defaults to `''`.
     * @param num The number of times to repeat it. Defaults to `0`.
     *
     * @example
     * faker.helpers.repeatString('Hello world! ') // ''
     * faker.helpers.repeatString('Hello world! ', 1) // 'Hello world! '
     * faker.helpers.repeatString('Hello world! ', 2) // 'Hello world! Hello world! '
     */
    repeatString(string?: string, num?: number): string;
    /**
     * Replaces the regex like expressions in the given string with matching values.
     *
     * Supported patterns:
     * - `.{times}` => Repeat the character exactly `times` times.
     * - `.{min,max}` => Repeat the character `min` to `max` times.
     * - `[min-max]` => Generate a number between min and max (inclusive).
     *
     * @param string The template string to to parse.
     *
     * @example
     * faker.helpers.regexpStyleStringParse() // ''
     * faker.helpers.regexpStyleStringParse('#{5}') // '#####'
     * faker.helpers.regexpStyleStringParse('#{2,9}') // '#######'
     * faker.helpers.regexpStyleStringParse('[500-15000]') // '8375'
     * faker.helpers.regexpStyleStringParse('#{3}test[1-5]') // '###test3'
     */
    regexpStyleStringParse(string?: string): string;
    /**
     * Takes an array and randomizes it in place then returns it.
     *
     * Uses the modern version of the Fisher–Yates algorithm.
     *
     * @template T The type of the entries to shuffle.
     * @param o The array to shuffle. Defaults to `[]`.
     *
     * @example
     * faker.helpers.shuffle() // []
     * faker.helpers.shuffle(['a', 'b', 'c']) // [ 'b', 'c', 'a' ]
     */
    shuffle<T>(o?: T[]): T[];
    /**
     * Takes an array of strings or function that returns a string
     * and outputs a unique array of strings based on that source.
     * This method does not store the unique state between invocations.
     *
     * @template T The type of the entries.
     * @param source The strings to choose from or a function that generates a string.
     * @param length The number of elements to generate.
     *
     * @example
     * faker.helpers.uniqueArray(faker.random.word, 50)
     * faker.helpers.uniqueArray(faker.definitions.name.first_name, 6)
     * faker.helpers.uniqueArray(["Hello", "World", "Goodbye"], 2)
     */
    uniqueArray<T>(source: readonly T[] | (() => T), length: number): T[];
    /**
     * Replaces the `{{placeholder}}` patterns in the given string mustache style.
     *
     * @param str The template string to parse.
     * @param data The data used to populate the placeholders.
     * This is a record where the key is the template placeholder,
     * whereas the value is either a string or a function suitable for `String.replace()`.
     *
     * @example
     * faker.helpers.mustache('I found {{count}} instances of "{{word}}".', {
     *   count: () => `${faker.datatype.number()}`,
     *   word: "this word",
     * }) // 'I found 57591 instances of "this word".'
     */
    mustache(str: string | undefined, data: Record<string, string | ((substring: string, ...args: any[]) => string)>): string;
    /**
     * Generates a full card with various random details.
     *
     * @example
     * faker.helpers.createCard()
     * // {
     * //   name: 'Maxine Abbott',
     * //   username: 'Idell_Kautzer60',
     * //   email: 'Nora_Bruen@hotmail.com',
     * //   address: {
     * //     streetA: 'Drake Avenue',
     * // ...
     * @deprecated If you need some specific object you should create your own method.
     */
    createCard(): Card;
    /**
     * Generates a persons card with various details attempting to use a consistent context.
     *
     * @example
     * faker.helpers.contextualCard()
     * // {
     * //   name: 'Eveline',
     * //   username: 'Eveline.Brekke56',
     * //   avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg',
     * //   email: 'Eveline.Brekke56.Hoppe@yahoo.com',
     * //   dob: 1964-05-06T05:14:37.874Z,
     * // ...
     * @deprecated If you need some specific object you should create your own method.
     */
    contextualCard(): ContextualCard;
    /**
     * Generates a user card with various details.
     *
     * @example
     * faker.helpers.userCard()
     * // {
     * //   name: 'Jodi Ferry',
     * //   username: 'Maybell.Kris',
     * //   email: 'Zoey_Lubowitz@yahoo.com',
     * //   address: {
     * //     street: 'McKenzie Estates',
     * // ....
     * @deprecated If you need some specific object you should create your own method.
     */
    userCard(): UserCard;
    /**
     * Generates an example transaction.
     *
     * @example
     * faker.helpers.createTransaction()
     * // {
     * //   amount: '551.32',
     * //   date: 2012-02-01T23:00:00.000Z,
     * //   business: 'Will, Fisher and Marks',
     * //   name: 'Investment Account (...8755)',
     * //   type: 'invoice',
     * //   account: '41796240'
     * // }
     */
    createTransaction(): Transaction;
}
