import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { ButtonTestComponent } from './components/button-test/button-test.component';

const homeRoutes: Routes = [
  { path: 'home',  
  component: HomePage, 
  
  children: [
    {
      path: 'test',  
    component: ButtonTestComponent
    }
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      homeRoutes
    )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class HomeRouteModule {

 }
