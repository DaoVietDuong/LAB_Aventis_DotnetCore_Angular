import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HomeComponent } from './components/home/home.component';
import { HomePage } from './pages/home.page';
import { HomeRouteModule } from './home-route.module';
import { NavBarComponent } from '../../shared/components/navigation/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule,
    HomeRouteModule
  ],
  declarations: [NavBarComponent, HomeComponent, HomePage]
})
export class HomeModule { }
