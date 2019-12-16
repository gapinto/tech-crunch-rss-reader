import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { HttpResponse } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  selectedPost: Post;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ posts }) => {
      this.posts = posts || [];
  });
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
