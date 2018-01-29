import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home.page';

const appRoutes: Routes = [
  { path: 'home',  component: HomePage}
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
export class HomeRouteModule {

 }
