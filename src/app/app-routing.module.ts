import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Componentes/login/login.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'login', component:LogInComponent},
  {path:'', redirectTo: 'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
