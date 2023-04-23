import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './Componentes/acerca/acerca.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { LogInComponent } from './Componentes/login/login.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    NavbarComponent,
    EncabezadoComponent,
    EducacionComponent,
    ProyectosComponent,
    LogInComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
