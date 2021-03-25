import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment }  from '../../environments/environment';
import { AppService, IAuth } from '../app.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private service: AppService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const { loggedIn, token } = this.service.authValue;
        const isApiUrl = request.url.startsWith(environment.apiUrl);

        // add auth header with jwt if user is logged in and request is to the api url
        if (loggedIn && token && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    //'Content-Type':  'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}