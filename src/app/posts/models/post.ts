export class Post {
    title: string;
    link: string;
    creator: string;
    pubDate: Date;
    description: string;
    encodedContent: string;
    categories: string[];

    constructor(
        title: string,
        link: string,
        creator: string,
        pubDate: Date,
        description: string,
        encodedContent: string,
        categories: string[]
    ) {
        this.title = title;
        this.creator = creator;
        this.pubDate = pubDate;
        this.description = description;
        this.categories = categories;
    }
}
