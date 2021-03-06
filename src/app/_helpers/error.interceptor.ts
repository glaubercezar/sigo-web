import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppService } from '../app.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private service: AppService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.service.logout();
                return throwError("Você não está logado!");
            } else if (err.status >= 500) {
                return throwError("Erro interno do servidor");
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}