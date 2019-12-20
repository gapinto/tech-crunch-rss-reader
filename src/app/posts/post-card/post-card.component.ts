import { Component, OnInit, Input, Output } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input()
  post: Post;

  @Input()
  showDescription = true;

  @Input()
  isSelectable = false;

  ngOnInit() {
  }
}
