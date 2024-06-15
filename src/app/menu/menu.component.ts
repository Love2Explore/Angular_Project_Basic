import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  //isUserLogin:boolean = false
   constructor(public authUser:HardcodedAuthenticationService){
     
   } 
   ngOnInit(): void {
     //  this.isUserLogin = this.authUser.isUserLogginIn();
   }
   logout(){
        this.authUser.logoutUser()
   }
}
