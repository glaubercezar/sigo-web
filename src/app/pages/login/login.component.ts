import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {
    if (this.service.auth) {
      this.router.navigate(['home']);
    }
  }

  doLogin() {
    if(this.username === 'admin' && this.password === 'admin') {
      this.service.login();
    }
  }

}
