import type { Faker } from '.';
/**
 * Module to generate database related entries.
 */
export declare class Database {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random database column name.
     *
     * @example
     * faker.database.column() // 'createdAt'
     */
    column(): string;
    /**
     * Returns a random database column type.
     *
     * @example
     * faker.database.type() // 'timestamp'
     */
    type(): string;
    /**
     * Returns a random database collation.
     *
     * @example
     * faker.database.collation() // 'utf8_unicode_ci'
     */
    collation(): string;
    /**
     * Returns a random database engine.
     *
     * @example
     * faker.database.engine() // 'ARCHIVE'
     */
    engine(): string;
}
