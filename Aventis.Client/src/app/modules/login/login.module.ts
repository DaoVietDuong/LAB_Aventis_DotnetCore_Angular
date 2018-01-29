import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './components/login.component';
import { LoginRouteModule } from './login-route.module';
import { LoginPage } from './pages/login.page';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRouteModule
  ],
  declarations: [LoginComponent, LoginPage],
  providers: [LoginService]
})
export class LoginModule { 
  
}
