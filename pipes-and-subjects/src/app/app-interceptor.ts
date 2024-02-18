import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { API_URL } from './constants';

export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    if (req.url.startsWith('/api')) {
      request = req.clone({
        url: req.url.replace('/api', API_URL),
      });
    }
    return next.handle(request).pipe(
      tap((req) => {
        if(req instanceof HttpRequest){
            console.log(req);
        }
      })
    );
  }
}
