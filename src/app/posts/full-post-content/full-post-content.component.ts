import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-full-post-content',
  templateUrl: './full-post-content.component.html',
  styleUrls: ['./full-post-content.component.scss']
})
export class FullPostContentComponent {

  @Input()
  post: Post;

  @Input()
  showDescription: true;

  @Output()
  fullPostContentClosed: EventEmitter<Post> = new EventEmitter();

  close() {
    this.fullPostContentClosed.emit(this.post);
  }

}
