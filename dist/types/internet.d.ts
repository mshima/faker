import type { Faker } from '.';
/**
 * Module to generate internet related entries.
 */
export declare class Internet {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random avatar url.
     *
     * @example
     * faker.internet.avatar()
     * // 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/315.jpg'
     */
    avatar(): string;
    /**
     * Generates an email address using the given person's name as base.
     *
     * @param firstName The optional first name to use. If not specified, a random one will be chosen.
     * @param lastName The optional last name to use. If not specified, a random one will be chosen.
     * @param provider The mail provider domain to use. If not specified, a random free mail provider will be chosen.
     *
     * @example
     * faker.internet.email() // 'Kassandra4@hotmail.com'
     * faker.internet.email('Jeanne', 'Doe') // 'Jeanne63@yahoo.com'
     * faker.internet.email('Jeanne', 'Doe', 'example.fakerjs.dev') // 'Jeanne_Doe88@example.fakerjs.dev'
     */
    email(firstName?: string, lastName?: string, provider?: string): string;
    /**
     * Generates an email address using an example mail provider using the given person's name as base.
     *
     * @param firstName The optional first name to use. If not specified, a random one will be chosen.
     * @param lastName The optional last name to use. If not specified, a random one will be chosen.
     *
     * @example
     * faker.internet.exampleEmail() // 'Helmer.Graham23@example.com'
     * faker.internet.exampleEmail('Jeanne', 'Doe') // 'Jeanne96@example.net'
     */
    exampleEmail(firstName?: string, lastName?: string): string;
    /**
     * Generates a username using the given person's name as base.
     *
     * @param firstName The optional first name to use. If not specified, a random one will be chosen.
     * @param lastName The optional last name to use. If not specified, a random one will be chosen.
     *
     * @example
     * faker.internet.userName() // 'Nettie_Zboncak40'
     * faker.internet.userName('Jeanne', 'Doe') // 'Jeanne98'
     */
    userName(firstName?: string, lastName?: string): string;
    /**
     * Returns a random web protocol. Either `http` or `https`.
     *
     * @example
     * faker.internet.protocol() // 'http'
     * faker.internet.protocol() // 'https'
     */
    protocol(): 'http' | 'https';
    /**
     * Returns a random http method.
     *
     * Can be either of the following:
     *
     * - `GET`
     * - `POST`
     * - `PUT`
     * - `DELETE`
     * - `PATCH`
     *
     * @example
     * faker.internet.httpMethod() // 'PATCH'
     */
    httpMethod(): 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    /**
     * Generates a random url.
     *
     * @example
     * faker.internet.url() // 'https://remarkable-hackwork.info'
     */
    url(): string;
    /**
     * Generates a random domain name.
     *
     * @example
     * faker.internet.domainName() // 'slow-timer.info'
     */
    domainName(): string;
    /**
     * Returns a random domain suffix.
     *
     * @example
     * faker.internet.domainSuffix() // 'com'
     * faker.internet.domainSuffix() // 'name'
     */
    domainSuffix(): string;
    /**
     * Generates a random domain word.
     *
     * @example
     * faker.internet.domainWord() // 'close-reality'
     * faker.internet.domainWord() // 'weird-cytoplasm'
     */
    domainWord(): string;
    /**
     * Generates a random IPv4 address.
     *
     * @example
     * faker.internet.ip() // '245.108.222.0'
     */
    ip(): string;
    /**
     * Generates a random IPv6 address.
     *
     * @example
     * faker.internet.ipv6() // '269f:1230:73e3:318d:842b:daab:326d:897b'
     */
    ipv6(): string;
    /**
     * Generates a random port number.
     *
     * @example
     * faker.internet.port() // '9414'
     */
    port(): number;
    /**
     * Generates a random user agent string.
     *
     * @example
     * faker.internet.userAgent()
     * // 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_8_8)  AppleWebKit/536.0.2 (KHTML, like Gecko) Chrome/27.0.849.0 Safari/536.0.2'
     */
    userAgent(): string;
    /**
     * Generates a random css hex color code.
     *
     * @param baseRed255 The optional base red. Used for aesthetically pleasing color palettes. Supports values between `0` and `255`. Defaults to `0`.
     * @param baseGreen255 The optional base green. Used for aesthetically pleasing color palettes. Supports values between `0` and `255`. Defaults to `0`.
     * @param baseBlue255 The optional base blue. Used for aesthetically pleasing color palettes. Supports values between `0` and `255`. Defaults to `0`.
     *
     * @example
     * faker.internet.color() // '#30686e'
     * faker.internet.color(100, 100, 100) // '#4e5f8b'
     */
    color(baseRed255?: number, baseGreen255?: number, baseBlue255?: number): string;
    /**
     * Generates a random mac address.
     *
     * @param sep The optional separator to use. Can be either `':'`, `'-'` or `''`. Defaults to `':'`.
     *
     * @example
     * faker.internet.mac() // '32:8e:2e:09:c6:05'
     */
    mac(sep?: string): string;
    /**
     * Generates a random password.
     *
     * @param len The length of the password to generate. Defaults to `15`.
     * @param memorable Whether the generated password should be memorable. Defaults to `false`.
     * @param pattern The pattern that all chars should match should match. Defaults to `/\w/`.
     * @param prefix The prefix to use. Defaults to `''`.
     *
     * @example
     * faker.internet.password() // '89G1wJuBLbGziIs'
     * faker.internet.password(20) // 'aF55c_8O9kZaPOrysFB_'
     * faker.internet.password(20, true) // 'lawetimufozujosodedi'
     * faker.internet.password(20, true, /[A-Z]/) // 'HMAQDFFYLDDUTBKVNFVS'
     * faker.internet.password(20, true, /[A-Z]/, 'Hello ') // 'Hello IREOXTDWPERQSB'
     */
    password(len?: number, memorable?: boolean, pattern?: RegExp, prefix?: string): string;
}
