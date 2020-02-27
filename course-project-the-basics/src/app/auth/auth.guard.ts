import { CanActivate, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(
        
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        // check if a logged user is present
        return this.authService.userSubject.pipe(
            take(1),
            map(user => {
                const isAuth = !!user;
                if (isAuth) {
                    return true;
                } else {
                    // send user to authentication page if not logged
                    return this.router.createUrlTree(['/auth']);
                }
            })
        );

    }

}