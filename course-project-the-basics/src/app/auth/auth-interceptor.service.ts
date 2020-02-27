import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor (private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

      return this.authService.userSubject
      .pipe(
          take(1),
          exhaustMap( user => {
            if (user) // it can be NULL
              req = req.clone( { params: new HttpParams().set('auth', user.token) } );
            return next.handle(req);
          })
      );

  }

}
