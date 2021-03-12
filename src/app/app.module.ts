import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

// Dependências do PrimeNG
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

// Dependências do SIGO
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NormasComponent } from './pages/normas/normas.component';
import { NormasUpsertComponent } from './pages/normas-upsert/normas-upsert.component';
import { ConsultoriasComponent } from './pages/consultorias/consultorias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ConsultoriasComponent,
    NormasComponent,
    NormasUpsertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    PanelModule,
    CardModule,
    DropdownModule,
    TableModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    CalendarModule
  ],
  providers: [
    MessageService, ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
