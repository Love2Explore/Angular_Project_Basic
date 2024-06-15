import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  message = "Some Message";
  name = '';
  welcomeMessage:string = '' ;
  errorMessageVisibility:boolean = false;
  username:string = ''
  errorMessageVisibilityPathV:boolean = false

  constructor(private route:ActivatedRoute,
              private welcomeService: WelcomeDataService
  ){}

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['name'])
     this.name = this.route.snapshot.params['name'];
 };
 onWelcome(){
  this.errorMessageVisibility = true
   this.welcomeService.executeHelloWorldService().subscribe( result => {this.welcomeMessage = result.message  } ,
                                                             error => this.handleError(error)   )       
 };
 handleError(error:any){
    console.log(error.error.message)
    this.welcomeMessage = error.error.message
 }
 onWelcomePathVariable(){
  this.errorMessageVisibilityPathV = true
  this.welcomeService.executeHelloWorldPathVariable(this.name).subscribe(result => {this.username = result.message  } , error => this.handleError(error) )
 }
}

export class helloBean{
   constructor(public message:string){}
}
