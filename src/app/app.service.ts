import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment }  from '../environments/environment';
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

  getNormStatus(): Array<any> {
    return [
      { label: 'Em vigor', value: 'em_vigor' },
      { label: 'Cancelada', value: 'cancelada' }
    ];
  }

  getDepartments(): Array<any> {
    return [
      { label: "Administrativo", value: 1 },
      { label: "Comercial", value: 2 },
      { label: "Financeiro", value: 3 },
      { label: "Operacional", value: 4 },
      { label: "Recursos Humanos RH", value: 5 }
    ];
  }

  getNorms(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/norms`).pipe(map((res: any) => res.data));
    // return this.http.get('assets/mock/normas.json').pipe(map((res: any) => res.data));
  }

  getNorm(id: number): Observable<Norma> {
    return this.http.get(`${environment.apiUrl}/api/v1/norms/${id}`);
  }

  addNorm(norm: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/norms`, norm);
  }

  updateNorm(id: number, norm: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/v1/norms/${id}`, norm);
  }

  deleteNorm(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/v1/norms/${id}`);
  }

  getDashboard(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/gestao/dashboard`).pipe(map((res: any) => res.data));
    // return this.http.get('assets/mock/dashboard.json').pipe(map((res: any) => res.data));
  }

}
