import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { HttpInterceptorCors } from './HttpInterceptorCors';

const MatModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [SanitizeHtmlPipe],
  imports: [
    ...MatModules,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    ...MatModules,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SanitizeHtmlPipe,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorCors,
      multi: true}
  ]
})
export class SharedModule { }
