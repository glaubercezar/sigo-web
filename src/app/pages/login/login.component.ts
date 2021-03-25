import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private service: AppService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    if (this.service.auth) {
      this.router.navigate(['home']);
    }
  }

  doLogin() {
    this.service.login(this.username, this.password).subscribe(() => {
      this.router.navigate(['home']);
    }, err => {
      this.messageService.add({severity:'error', summary: 'Falha!', detail: err, life: 3000});
    });
  }

}
