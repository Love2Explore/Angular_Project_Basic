import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WelcomeComponent,LoginComponent,MenuComponent,FooterComponent],
   templateUrl: './app.component.html',
  //template:'<h1>Hi</h1>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dream-app';
  welcomeTile = 'Hello Welocme';
}