import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardListComponent } from './post-card-list/post-card-list.component';
import { PostCardListHeaderComponent } from './post-card-list-header/post-card-list-header.component';
import { PostCardComponent } from './post-card/post-card.component';
import { FullPostContentComponent } from './full-post-content/full-post-content.component';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    PostCardListComponent,
    PostCardListHeaderComponent,
    PostCardComponent,
    FullPostContentComponent,
    PostsComponent
  ],
  exports: [
    PostCardListComponent,
    PostCardListHeaderComponent,
    PostCardComponent,
    FullPostContentComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
    SharedModule
  ],
})
export class PostModule { }
