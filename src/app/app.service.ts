import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment }  from '../environments/environment';
import { Norma } from './_interfaces/norma';

export interface IAuth {
  loggedIn: boolean;
  token: string
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private authSubject: BehaviorSubject<IAuth>;
  auth: Observable<IAuth>;

  constructor( private http: HttpClient ) {
    const token = localStorage.getItem("auth");
    this.authSubject = new BehaviorSubject<IAuth>({
      loggedIn: !!token,
      token: token
    });
    this.auth = this.authSubject.asObservable();
  }

  public get authValue(): IAuth {
    return this.authSubject.getValue();
  }

  login(username, password): Observable<void> {
    return this.http.post(`${environment.apiUrl}/api/v1/login`, { username, password })
        .pipe(map((res: any) => {
            // guarda token no local storage para uso futuro ao recarregar página
            localStorage.setItem('auth', res.token);
            // atualiza objeto reativo
            this.authSubject.next({
              loggedIn: true, token: res.token
            });
        }));
  }

  logout() {
    localStorage.removeItem("auth");
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
