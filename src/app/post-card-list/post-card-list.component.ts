import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-post-card-list',
  templateUrl: './post-card-list.component.html',
  styleUrls: ['./post-card-list.component.scss']
})
export class PostCardListComponent implements OnInit {

  @Input()
  posts: Post[];

  @Output()
  postCardSelected: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  selectPost(post: Post) {
    this.postCardSelected.emit(post);
  }

}
