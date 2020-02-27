import { Injectable, OnDestroy } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  // ** Slightly modified version of the interceptor **
  // 
  // Tried to simplify the Udemy course original code, that was
  // not too readable for me
  //
  
  private user: User;

  constructor (private authService: AuthService) {
    authService.userSubject.subscribe( // no need to unsubscribe, service will be alive as long as our app will be
      _user => { this.user = _user }
    );
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

      if (this.user) // it can be NULL, for example when we are logging in
        req = req.clone( { params: new HttpParams().set('auth', this.user.token) } );
      return next.handle(req);

  }

  // ** Original version of the interceptor from Udemy Course **
  //
  // constructor (private authService: AuthService) {
  // }

  // intercept(req: HttpRequest<any>, next: HttpHandler):
  //   Observable<HttpEvent<any>> {

  //     return this.authService.userSubject
  //     .pipe(
  //         take(1),
  //         exhaustMap( user => {
  //           if (user) // it can be NULL, for example when we are logging in
  //             req = req.clone( { params: new HttpParams().set('auth', user.token) } );
  //           return next.handle(req);
  //         })
  //     );

  // }

}
