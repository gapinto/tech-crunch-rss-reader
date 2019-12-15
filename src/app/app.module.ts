import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PostCardComponent } from './post-card/post-card.component';
import { SharedModule } from './shared/shared.module';
import { FullPostContentComponent } from './full-post-content/full-post-content.component';
import { PostCardListComponent } from './post-card-list/post-card-list.component';
import { PostCardListHeaderComponent } from './post-card-list-header/post-card-list-header.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    FullPostContentComponent,
    PostCardListComponent,
    PostCardListHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
