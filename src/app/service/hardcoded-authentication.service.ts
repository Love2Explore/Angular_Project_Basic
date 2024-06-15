import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username:any,password:any){
    if(username == 'rewati' && password == 'dummy'){
      sessionStorage.setItem("sessionuser",username);
      return true
    }else{
      return false
    }
  }
  isUserLogginIn(){
    let userId = sessionStorage.getItem("sessionuser");
    return !(userId == null)
  }

  logoutUser(){
    sessionStorage.removeItem("sessionuser");
  }
}
