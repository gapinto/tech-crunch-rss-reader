import { Component, OnInit } from '@angular/core';
import { Post } from './shared/models/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tech-crunch-rss-reader';

  posts: Post[];
  selectedPost: Post;

  constructor() {
  }

  ngOnInit() {
    const post = new Post(
      'Pandora launches interactive voice ads',
      ['Guilherme Andrade'],
      new Date(),
      `Pandora has begun to test a new type of advertising format that allows listeners to respond to the ad by speaking aloud.
      In the new ads, listeners are prompted to say “yes” after the ad asks a question and a tone plays.
      The ads will then offer more information about the product or brand in question.`,
      ['Music']
    );

    const post2 = new Post(
      'Pandora launches interactive voice ads',
      ['Luna Pinto'],
      new Date(),
      `Luna Pandora has begun to test a new type of advertising format that allows listeners to respond to the ad by speaking aloud.
      In the new ads, listeners are prompted to say “yes” after the ad asks a question and a tone plays.
      The ads will then offer more information about the product or brand in question.`,
      ['Technology']
    );

    this.posts = [ post, post2 ];
  }

  onPostCarListFiltered(filteredPosts: Post[]) {
    const [first] = filteredPosts.filter(post => this.selectedPost === post);
    this.selectedPost = first;
  }

  onSelectPost(post: Post) {
    this.selectedPost = post;
  }

  onClose() {
    this.selectedPost = null;
  }

}
