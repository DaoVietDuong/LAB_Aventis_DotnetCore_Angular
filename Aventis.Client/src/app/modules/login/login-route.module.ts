import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login.page';


const loginRoutes: Routes = [
  { path: 'login',  component: LoginPage}
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      loginRoutes
    )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class LoginRouteModule {

 }
