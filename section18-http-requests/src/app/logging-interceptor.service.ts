import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('Outgoing request: ' + req.url);
        console.log(req.url);
        console.log(req.headers);
        console.log(req.body);

        return next.handle(req).pipe(tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log('Incoming response:');
                console.log(event.body);
            }
        }))

    }

}