import { NgModule } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent}
      ])
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

