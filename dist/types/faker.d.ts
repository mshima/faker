import { Address } from './address';
import { Animal } from './animal';
import { Commerce } from './commerce';
import { Company } from './company';
import { Database } from './database';
import { Datatype } from './datatype';
import { _Date } from './date';
import type { LocaleDefinition } from './definitions';
import { Fake } from './fake';
import { Finance } from './finance';
import { Git } from './git';
import { Hacker } from './hacker';
import { Helpers } from './helpers';
import { Image } from './image';
import { Internet } from './internet';
import type { KnownLocale } from './locales';
import { Lorem } from './lorem';
import { Mersenne } from './mersenne';
import { Music } from './music';
import { Name } from './name';
import { Phone } from './phone';
import { Random } from './random';
import { System } from './system';
import { Time } from './time';
import { Unique } from './unique';
import { Vehicle } from './vehicle';
import { Word } from './word';
export declare type LiteralUnion<T extends U, U = string> = T | (U & {
    zz_IGNORE_ME?: never;
});
export declare type UsableLocale = LiteralUnion<KnownLocale>;
export declare type UsedLocales = Partial<Record<UsableLocale, LocaleDefinition>>;
export interface FakerOptions {
    locales?: UsedLocales;
    locale?: UsableLocale;
    localeFallback?: UsableLocale;
}
export declare class Faker {
    locales: UsedLocales;
    locale: UsableLocale;
    localeFallback: UsableLocale;
    readonly definitions: LocaleDefinition;
    seedValue?: number | number[];
    readonly fake: Fake['fake'];
    readonly unique: Unique['unique'];
    readonly mersenne: Mersenne;
    random: Random;
    readonly helpers: Helpers;
    datatype: Datatype;
    readonly address: Address;
    readonly animal: Animal;
    readonly commerce: Commerce;
    readonly company: Company;
    readonly database: Database;
    readonly date: _Date;
    readonly finance: Finance;
    readonly git: Git;
    readonly hacker: Hacker;
    readonly image: Image;
    readonly internet: Internet;
    readonly lorem: Lorem;
    readonly music: Music;
    readonly name: Name;
    readonly phone: Phone;
    readonly system: System;
    readonly time: Time;
    readonly vehicle: Vehicle;
    readonly word: Word;
    constructor(opts?: FakerOptions);
    /**
     * Load the definitions contained in the locales file for the given types
     */
    private loadDefinitions;
    seed(value?: number | number[]): void;
    /**
     * Set Faker's locale
     *
     * @param locale The locale to set (e.g. `en` or `en_AU`, `en_AU_ocker`).
     */
    setLocale(locale: UsableLocale): void;
}
