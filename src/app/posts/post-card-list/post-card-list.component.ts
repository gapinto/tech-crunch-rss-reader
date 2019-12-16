import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-post-card-list',
  templateUrl: './post-card-list.component.html',
  styleUrls: ['./post-card-list.component.scss']
})
export class PostCardListComponent implements OnInit {

  categories: string[];

  filteredPosts: Post[];

  @Input()
  posts: Post[];

  @Output()
  postCardSelected: EventEmitter<Post> = new EventEmitter<Post>();

  @Output()
  postCardListFiltered: EventEmitter<Post[]> = new EventEmitter<Post[]>();

  constructor() {}

  ngOnInit() {
    this.filteredPosts = this.posts;
    this.categories = [...new Set<string>(this.posts.flatMap(post => post.categories))];
  }

  selectPost(post: Post) {
    this.postCardSelected.emit(post);
  }

  onSelectCategory(category: string) {
    this.filteredPosts = this.posts.filter(post => !category || post.categories.includes(category));
    this.postCardListFiltered.emit(this.filteredPosts);
  }

}
