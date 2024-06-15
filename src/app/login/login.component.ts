import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username="";
  password="";
  errorMessage="Invalid Credential!";
  errorMessageVisibility = false;
  
  constructor(
    private router:Router ,
    private hardcoded:HardcodedAuthenticationService
  ){

  }
  
  ngOnInit(): void {
      
  }
   
  //Router
  //Angular.giveRouter
  //Dependency Injection

  handleLoginButon(){
    if( this.hardcoded.authenticate(this.username,this.password) ){
      this.errorMessageVisibility = false;
      this.router.navigate(['welcome',this.username])
    }else{
      this.errorMessageVisibility = true;
    }
  }
}
