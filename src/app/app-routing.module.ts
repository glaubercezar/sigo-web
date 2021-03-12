import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_helpers';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NormasComponent } from './pages/normas/normas.component';
import { NormasUpsertComponent } from './pages/normas-upsert/normas-upsert.component';
import { ConsultoriasComponent } from './pages/consultorias/consultorias.component';
const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'normas', component: NormasComponent, canActivate: [AuthGuard] },
  { path: 'normas/add', component: NormasUpsertComponent, canActivate: [AuthGuard] },
  { path: 'normas/edit/:id', component: NormasUpsertComponent, canActivate: [AuthGuard] },
  { path: 'consultorias', component: ConsultoriasComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
