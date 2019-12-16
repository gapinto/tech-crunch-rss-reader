import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { HttpResponse, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Post[]>> {
      return this.http.get<Post[]>(`${this.baseUrl}/posts`, { observe: 'response' });
  }
}
