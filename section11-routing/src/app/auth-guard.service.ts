
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state:  RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.isAuthenticated().then(
          (authenticated: boolean) => {
            if (authenticated) {
              return true;
            } else {
              console.log('You can\' navigate here');
              this.router.navigate(['/']);
              // return false;
            }
          }
        )
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | Observable<boolean> | Promise<boolean> {
      return this.canActivate(childRoute, state);
  }

}
