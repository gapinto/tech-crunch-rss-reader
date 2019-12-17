import { Post } from './models/post';

const createPost = ({
    title = 'Post card component',
    link = '',
    creator = 'Guilherme Andrade',
    pubDate = new Date(),
    description = 'description',
    encodedContent = '<p>Component Tests</p>',
    categories = ['Component Tests']
  } = {}): Post => {
    return new Post(title, link, creator, pubDate, description, encodedContent, categories);
  };

export default { createPost };
