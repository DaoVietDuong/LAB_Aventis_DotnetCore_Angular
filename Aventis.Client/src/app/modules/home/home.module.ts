import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HomeComponent } from './components/home/home.component';
import { HomePage } from './pages/home.page';
import { HomeRouteModule } from './home-route.module';
import { NavBarComponent } from '../../shared/components/navigation/nav-bar/nav-bar.component';
import { ButtonTestComponent } from './components/button-test/button-test.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule,
    HomeRouteModule
  ],
  declarations: [NavBarComponent, HomeComponent, HomePage, ButtonTestComponent]
})
export class HomeModule { }
