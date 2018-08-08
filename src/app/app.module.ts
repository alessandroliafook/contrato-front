import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { routing } from './config/routes.config'

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SessionService } from './services/session.service';
import { CredencialService } from './services/credencial.service'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    RouterModule,
    FormsModule
  ],
  providers: [SessionService, CredencialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
