import type { Faker } from '.';
/**
 * Module to generate random texts and words.
 */
export declare class Lorem {
    private readonly faker;
    private readonly Helpers;
    constructor(faker: Faker);
    /**
     * Generates a word of a specified length.
     *
     * @param length length of the word that should be returned. Defaults to a random length.
     *
     * @example
     * faker.lorem.word() // 'temporibus'
     * faker.lorem.word(5) // 'velit'
     */
    word(length?: number): string;
    /**
     * Generates a space separated list of words.
     *
     * @param num The number of words to generate. Defaults to `3`.
     *
     * @example
     * faker.lorem.words() // 'qui praesentium pariatur'
     * faker.lorem.words(10) // 'debitis consectetur voluptatem non doloremque ipsum autem totam eum ratione'
     */
    words(num?: number): string;
    /**
     * Generates a space separated list of words beginning a capital letter and ending with a dot.
     *
     * @param wordCount The number of words, that should be in the sentence. Defaults to a random number between `3` and `10`.
     * @param range Currently this parameter does nothing.
     *
     * @example
     * faker.lorem.sentence() // 'Voluptatum cupiditate suscipit autem eveniet aut dolorem aut officiis distinctio.'
     * faker.lorem.sentence(5) // 'Laborum voluptatem officiis est et.'
     */
    sentence(wordCount?: number, range?: number): string;
    /**
     * Generates a slugified text consisting of the given number of hyphen separated words.
     *
     * @param wordCount The number of words to generate. Defaults to `3`.
     *
     * @example
     * faker.lorem.slug() // 'dolores-illo-est'
     */
    slug(wordCount?: number): string;
    /**
     * Generates the given number of sentences.
     *
     * @param sentenceCount The number of sentences to generate. Defaults to a random number between `2` and `6`.
     * @param separator The separator to add between sentences. Defaults to `' '`.
     *
     * @example
     * faker.lorem.sentences() // 'Iste molestiae incidunt aliquam possimus reprehenderit eum corrupti. Deleniti modi voluptatem nostrum ut esse.'
     * faker.lorem.sentences(2) // 'Maxime vel numquam quibusdam. Dignissimos ex molestias quos aut molestiae quam nihil occaecati maiores.'
     * faker.lorem.sentences(2, '\n')
     * // 'Et rerum a unde tempora magnam sit nisi.
     * // Et perspiciatis ipsam omnis.'
     */
    sentences(sentenceCount?: number, separator?: string): string;
    /**
     * Generates a paragraph with at least the given number of sentences.
     *
     * @param sentenceCount The minim number of sentences to generate. Defaults to `3`.
     *
     * @example
     * faker.lorem.paragraph() // 'Non architecto nam unde sint. Ex tenetur dolor facere optio aut consequatur. Ea laudantium reiciendis repellendus.'
     * faker.lorem.paragraph() // 'Animi possimus nemo consequuntur ut ea et tempore unde qui. Quis corporis esse occaecati.'
     */
    paragraph(sentenceCount?: number): string;
    /**
     * Generates the given number of paragraphs.
     *
     * @param paragraphCount The number of paragraphs to generate. Defaults to `3`.
     * @param separator The separator to use. Defaults to `'\n \r'`.
     *
     * @example
     * faker.lorem.paragraphs()
     * // 'Beatae voluptatem dicta et assumenda fugit eaque quidem consequatur. Fuga unde provident. Id reprehenderit soluta facilis est laborum laborum. Illum aut non ut. Est nulla rem ipsa.
     * // Voluptatibus quo pariatur est. Temporibus deleniti occaecati pariatur nemo est molestias voluptas. Doloribus commodi et et exercitationem vel et. Omnis inventore cum aut amet.
     * // Sapiente deleniti et. Ducimus maiores eum. Rem dolorem itaque aliquam.'
     *
     * faker.lorem.paragraphs(5)
     * // 'Quia hic sunt ducimus expedita quo impedit soluta. Quam impedit et ipsum optio. Unde dolores nulla nobis vero et aspernatur officiis.
     * // Aliquam dolorem temporibus dolores voluptatem voluptatem qui nostrum quia. Sit hic facilis rerum eius. Beatae doloribus nesciunt iste ipsum.
     * // Natus nam eum nulla voluptas molestiae fuga libero nihil voluptatibus. Sed quam numquam eum ipsam temporibus eaque ut et. Enim quas debitis quasi quis. Vitae et vitae.
     * // Repellat voluptatem est laborum illo harum sed reprehenderit aut. Quo sit et. Exercitationem blanditiis totam velit ad dicta placeat.
     * // Rerum non eum incidunt amet quo. Eaque laborum ut. Recusandae illo ab distinctio veritatis. Cum quis architecto ad maxime a.'
     *
     * faker.lorem.paragraphs(2, '<br/>\n')
     * // 'Eos magnam aut qui accusamus. Sapiente quas culpa totam excepturi. Blanditiis totam distinctio occaecati dignissimos cumque atque qui officiis.<br/>
     * // Nihil quis vel consequatur. Blanditiis commodi deserunt sunt animi dolorum. A optio porro hic dolorum fugit aut et sint voluptas. Minima ad sed ipsa est non dolores.'
     */
    paragraphs(paragraphCount?: number, separator?: string): string;
    /**
     * Generates a random text based on a random lorem method.
     *
     * @param times This parameter does nothing.
     *
     * @example
     * faker.lorem.text() // 'Doloribus autem non quis vero quia.'
     * faker.lorem.text()
     * // 'Rerum eum reiciendis id ipsa hic dolore aut laborum provident.
     * // Quis beatae quis corporis veritatis corrupti ratione delectus sapiente ut.
     * // Quis ut dolor dolores facilis possimus tempore voluptates.
     * // Iure nam officia optio cumque.
     * // Dolor tempora iusto.'
     */
    text(times?: number): string;
    /**
     * Generates the given number lines of lorem separated by `'\n'`.
     *
     * @param lineCount The number of lines to generate. Defaults to a random number between `1` and `5`.
     *
     * @example
     * faker.lorem.lines()
     * // 'Rerum quia aliquam pariatur explicabo sint minima eos.
     * // Voluptatem repellat consequatur deleniti qui quibusdam harum cumque.
     * // Enim eveniet a qui.
     * // Consectetur velit eligendi animi nostrum veritatis.'
     *
     * faker.lorem.lines()
     * // 'Soluta deserunt eos quam reiciendis libero autem enim nam ut.
     * // Voluptate aut aut.'
     */
    lines(lineCount?: number): string;
}
