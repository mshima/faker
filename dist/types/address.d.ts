import type { Faker } from '.';
import type { Helpers } from './helpers';
/**
 * Module to generate addresses and locations.
 */
export declare class Address {
    private readonly faker;
    readonly Helpers: Helpers;
    constructor(faker: Faker);
    /**
     * Generates random zipcode from specified format. If format is not specified, the
     * locale's zip format is used.
     *
     * @param format The optional format used to generate the the zip code.
     * By default, a random format is used from the locale zip formats.
     *
     * @see faker.helpers.replaceSymbols()
     *
     * @example
     * faker.address.zipCode() // '17839'
     * faker.address.zipCode('####') // '6925'
     *
     */
    zipCode(format?: string): string;
    /**
     * Generates random zipcode from state abbreviation. If state abbreviation is
     * not specified, a random zip code is generated according to the locale's zip format.
     * Only works for locales with postcode_by_state definition. If a locale does not
     * have a postcode_by_state definition, a random zip code is generated according
     * to the locale's zip format.
     *
     * @param state The abbreviation of the state to generate the zip code for.
     *
     * @example
     * fakerUS.address.zipCodeByState("AK") // '99595'
     * fakerUS.address.zipCodeByState("??") // '47683-9880'
     */
    zipCodeByState(state: string): string | number;
    /**
     * Generates a random localized city name.
     *
     * @param format The format to use. Can be either the index of the format to use or
     * any method provided by faker wrapped in `{{}}`, e.g. `{{name.firstName}}` in
     * order to build the city name.
     *
     * If no format string is provided one of the following is randomly used:
     *
     * - `{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}`
     * - `{{address.cityPrefix}} {{name.firstName}}`
     * - `{{name.firstName}}{{address.citySuffix}}`
     * - `{{name.lastName}}{{address.citySuffix}}`
     * - `{{address.cityName}}` when city name is available
     *
     * @example
     * faker.address.city() // 'Gleasonbury'
     * faker.address.city(2) // 'Jadenshire'
     */
    city(format?: string | number): string;
    /**
     * Returns a random localized city prefix.
     *
     * @example
     * faker.address.cityPrefix() // 'East'
     */
    cityPrefix(): string;
    /**
     * Returns a random localized city suffix.
     *
     * @example
     * faker.address.citySuffix() // 'mouth'
     */
    citySuffix(): string;
    /**
     * Returns a random localized city name.
     *
     * @example
     * faker.address.cityName() // 'San Rafael'
     */
    cityName(): string;
    /**
     * Generates a random localized street name.
     *
     * @example
     * faker.address.streetName() // 'Kulas Roads'
     */
    streetName(): string;
    /**
     * Generates a random localized street address.
     *
     * @param useFullAddress When true this will generate a full address.
     * Otherwise it will just generate a street address.
     *
     * @example
     * faker.address.streetName() // '0917 O'Conner Estates'
     * faker.address.streetAddress(true) // '3393 Ronny Way Apt. 742'
     * faker.address.streetAddress(false) // '34830 Erdman Hollow'
     */
    streetAddress(useFullAddress?: boolean): string;
    /**
     * Returns a random localized street suffix.
     *
     * @example
     * faker.address.streetSuffix() // 'Streets'
     */
    streetSuffix(): string;
    /**
     * Returns a random localized street prefix.
     *
     * @example
     * fakerGH.address.streetPrefix() // 'Boame'
     */
    streetPrefix(): string;
    /**
     * Generates a random localized secondary address.
     *
     * @example
     * faker.address.secondaryAddress() // 'Apt. 861'
     */
    secondaryAddress(): string;
    /**
     * Returns a random localized county.
     *
     * @example
     * faker.address.county() // 'Cambridgeshire'
     */
    county(): string;
    /**
     * Returns a random country name.
     *
     * @example
     * faker.address.country() // 'Greece'
     */
    country(): string;
    /**
     * Returns a random country code.
     *
     * @param alphaCode The code to return. Can be either `'alpha-2'` (2 letter code)
     * or `'alpha-3'` (three letter code). Defaults to `'alpha-2'`.
     *
     * @example
     * faker.address.countryCode() // 'SJ'
     * faker.address.countryCode('alpha-2') // 'GA'
     * faker.address.countryCode('alpha-3') // 'TJK'
     * faker.address.countryCode('unsupported') // 'DJ'
     */
    countryCode(alphaCode?: string): string;
    /**
     * Returns a random localized state from this country.
     *
     * @param useAbbr This parameter does nothing.
     *
     * @example
     * faker.address.state() // 'Georgia'
     */
    state(useAbbr?: boolean): string;
    /**
     * Returns a random localized state's abbreviated name from this country.
     *
     * @example
     * faker.address.stateAbbr() // 'ND'
     */
    stateAbbr(): string;
    /**
     * Generates a random latitude.
     *
     * @param max The upper bound for the latitude to generate. Defaults to `90`.
     * @param min The lower bound for the latitude to generate. Defaults to `-90`.
     * @param precision The number of decimal points of precision for the latitude. Defaults to `4`.
     *
     * @example
     * faker.address.latitude() // '-30.9501'
     * faker.address.latitude(10, -10, 5) // '2.68452'
     */
    latitude(max?: number, min?: number, precision?: number): string;
    /**
     * Generates a random longitude.
     *
     * @param max The upper bound for the longitude to generate. Defaults to `180`.
     * @param min The lower bound for the longitude to generate. Defaults to `-180`.
     * @param precision The number of decimal points of precision for the longitude. Defaults to `4`.
     *
     * @example
     * faker.address.longitude() // '-154.0226'
     * faker.address.longitude(10, -10, 5) // '-4.03620'
     */
    longitude(max?: number, min?: number, precision?: number): string;
    /**
     * Returns a random direction (cardinal and ordinal; northwest, east, etc).
     *
     * @param useAbbr If true this will return abbreviated directions (NW, E, etc).
     * Otherwise this will return the long name. Defaults to `false`.
     *
     * @example
     * faker.address.direction() // 'Northeast'
     * faker.address.direction(false) // 'South'
     * faker.address.direction(true) // 'NE'
     */
    direction(useAbbr?: boolean): string;
    /**
     * Returns a random cardinal direction (north, east, south, west).
     *
     * @param useAbbr If true this will return abbreviated directions (N, E, etc).
     * Otherwise this will return the long name. Defaults to `false`.
     *
     * @example
     * faker.address.cardinalDirection() // 'North'
     * faker.address.cardinalDirection(false) // 'South'
     * faker.address.cardinalDirection(true) // 'N'
     */
    cardinalDirection(useAbbr?: boolean): string;
    /**
     * Returns a random ordinal direction (northwest, southeast, etc).
     *
     * @param useAbbr If true this will return abbreviated directions (NW, SE, etc).
     * Otherwise this will return the long name. Defaults to `false`.
     *
     * @example
     * faker.address.ordinalDirection() // 'Northeast'
     * faker.address.ordinalDirection(false) // 'Northwest'
     * faker.address.ordinalDirection(true) // 'NE'
     */
    ordinalDirection(useAbbr?: boolean): string;
    /**
     * Generates a random GPS coordinate within the specified radius from the given coordinate.
     *
     * @param coordinate The original coordinate to get a new coordinate close to.
     * If no coordinate is given, a random one will be chosen.
     * @param radius The maximum distance from the given coordinate to the new coordinate. Defaults to `10`.
     * @param isMetric If `true` assume the radius to be in kilometers. If `false` for miles. Defaults to `false`.
     *
     * @example
     * faker.address.nearbyGPSCoordinate() // [ '33.8475', '-170.5953' ]
     * faker.address.nearbyGPSCoordinate([33, -170]) // [ '33.0165', '-170.0636' ]
     * faker.address.nearbyGPSCoordinate([33, -170], 1000, true) // [ '37.9163', '-179.2408' ]
     */
    nearbyGPSCoordinate(coordinate?: number[], radius?: number, isMetric?: boolean): string[];
    /**
     * Returns a random time zone.
     *
     * @example
     * faker.address.timeZone() // 'Pacific/Guam'
     */
    timeZone(): string;
}
