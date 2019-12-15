export class Post {
    title: string;
    authors: string[];
    pubdate: Date;
    description: string;
    categories: string[];

    constructor(
        title: string,
        authors: string[],
        pubdate: Date,
        description: string,
        categories: string[]
    ) {
        this.title = title;
        this.authors = authors;
        this.pubdate = pubdate;
        this.description = description;
        this.categories = categories;
    }
}
