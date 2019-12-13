export class Post {
    title: string;
    authors: Array<string>;
    pubdate: Date;
    description: string;
    categories: Array<string>;

    constructor(
        title: string,
        authors: Array<string>,
        pubdate: Date,
        description: string,
        categories: Array<string>
    ) {
        this.title = title;
        this.authors = authors;
        this.pubdate = pubdate;
        this.description = description;
        this.categories = categories;
    }
}
