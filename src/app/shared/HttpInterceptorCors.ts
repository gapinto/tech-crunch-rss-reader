import { Injectable, Injector } from '@angular/core';
import { Route } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorCors implements HttpInterceptor {
 constructor() {}

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const headers = req.headers
   .set('Access-Control-Allow-Origin', '*')
   .set('Access-Control-Allow-Headers', 'Content-Type');
   const authReq = req.clone({ headers });
   return next.handle(authReq);
 }
}
