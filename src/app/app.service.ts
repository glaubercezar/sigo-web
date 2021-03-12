import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Norma } from './_interfaces/norma';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  auth = true;

  constructor( private router: Router, private http: HttpClient ) {

    const logged = localStorage.getItem("auth");
    this.auth = !!logged;
  }

  login() {
    localStorage.setItem("auth", "true");
    //this.router.navigate(['/home']);
    window.location.href = "/home";

  }

  logout() {
    localStorage.removeItem("auth");
    //this.router.navigate(['/']);
    window.location.href = "/";
  }

  getNormas() {
    return this.http.get<any>('assets/normas.json')
      .toPromise()
      .then(res => <Norma[]>res.data)
      .then(data => { return data; });
  }

}
