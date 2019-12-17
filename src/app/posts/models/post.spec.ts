import { Post } from './post';

const createPost = ({
  title = 'Post card component',
  link = '',
  creator = 'Guilherme Andrade',
  pubDate = new Date(),
  description = 'description',
  encodedContent = '<p>Component Tests</p>',
  categories = ['Component Tests']
} = {}) => {
  return new Post(title, link, creator, pubDate, description, encodedContent, categories);
};

describe('Post', () => {
  it('should create an instance', () => {
    expect(createPost.call(this)).toBeTruthy();
  });
});
