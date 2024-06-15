import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { helloBean } from '../../welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpclient: HttpClient
  ) { }

  executeHelloWorldService(){
   return this.httpclient.get<helloBean>("http://localhost:8080/hello-world-bean") ; 
  }
  executeHelloWorldPathVariable(name:String){
    return this.httpclient.get<helloBean>(`http://localhost:8080/hello-world-bean/${name}`) ; 
  }
}
