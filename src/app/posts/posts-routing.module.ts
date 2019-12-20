import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { map, catchError } from 'rxjs/operators';
import { empty, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Post } from './models/post';

@Injectable({ providedIn: 'root' })
export class PostsResolve implements Resolve<Post[]> {
  constructor(private service: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service
      .findAll()
      .pipe(
        map((response: any) => response.body),
        catchError(err => {
          return of([]);
        })
      );
  }
}

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      posts: PostsResolve
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
