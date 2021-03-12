import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AppService } from '../app.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(  private service: AppService, private router: Router ) {}

    canActivate() {

        const auth = this.service.auth;

        // if authorized so return true
        if (auth) { return true; }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/']);
        return false;
    }
}