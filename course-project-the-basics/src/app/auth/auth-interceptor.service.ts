import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor (private authService: AuthService) {

  }

  intercept(
    req: import("@angular/common/http").HttpRequest<any>, 
    next: import("@angular/common/http").HttpHandler
    
  ): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {

    throw new Error("Method not implemented.");
  }

}
