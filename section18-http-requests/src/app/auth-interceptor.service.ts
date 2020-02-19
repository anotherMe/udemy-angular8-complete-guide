import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
        // return next.handle(req);
        return next.handle(modifiedRequest).pipe(
            tap( event => {
                console.log(event);
            })
        );
    }

}