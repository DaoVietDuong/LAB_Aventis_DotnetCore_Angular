import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './components/login.component';
import { LoginRouteModule } from './login-route.module';
import { LoginPage } from './pages/login.page';


@NgModule({
  imports: [
    CommonModule,
    LoginRouteModule
  ],
  declarations: [LoginComponent, LoginPage]
})
export class LoginModule { 
  
}
