import { Component } from '@angular/core';
import { AppService, IAuth } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  logged = false;

  constructor(service: AppService) {
    service.auth.subscribe((auth:IAuth) => {
      this.logged = auth.loggedIn;
    });
  }
}
