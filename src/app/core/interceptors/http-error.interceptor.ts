import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoggingService } from '@shared/services/logging.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private loggingService: LoggingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('HTTP', request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.loggingService.logHttpError(error);

        switch (error.status) {
          case 400:
            console.warn('Bad Request');
            break;
          case 401:
            console.warn('Unauthorized');
            break;
          case 403:
            console.warn('Forbidden');
            break;  
          }
        return throwError(() => error);
      })
    );
  }
}
