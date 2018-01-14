import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login.page';




const appRoutes: Routes = [
  { path: 'login',  component: LoginPage}
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class LoginRouteModule {

 }
