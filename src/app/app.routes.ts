import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { LogoutComponent } from './logout/logout.component';

export const routes:Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'welcome/:name',component:WelcomeComponent},
    {path:'todo',component:ListToDoComponent},
    {path:'logout',component:LogoutComponent},
    {path:"**",component:ErrorComponent}
  ]
