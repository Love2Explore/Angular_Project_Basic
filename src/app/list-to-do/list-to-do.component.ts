import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
 constructor(
  public id :number,
  public username: string , 
  public description:string,
  public done:boolean,
  public targetDate:Date,
  public completedDate:Date
 ){

 }
}

@Component({
  selector: 'app-list-to-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-to-do.component.html',
  styleUrl: './list-to-do.component.css'
})
export class ListToDoComponent implements OnInit{
  // todos = [ 
  //        new Todo(1,"Learn Angular",false,new Date(),new Date()),
  //        new Todo(2,"Learn Spring Boot",false,new Date(),new Date()),
  //        new Todo(3,"Learn JAVA",false,new Date(),new Date()),
  //        new Todo(4,"Complete EAM",false,new Date(),new Date())
  // ]
  // todo ={
  //   id:1,
  //   description:"New Todo"
  // }
  todos  : Todo[]  = []
  message:string = ''
  deletedTodo(id:number){
     this.service.deleteToDoById('rewati',id).subscribe()
     this.message = "Delected ID " + id
     this.refreshTodo()
  }
  constructor(private service: TodoDataService){
    
  }
  ngOnInit(): void {
       this.refreshTodo()
  }
  refreshTodo(){
    this.service.getTodoForUser('rewati').subscribe(
      response=>{
        this.todos = response;
        console.log(response);
      }
     )
  }
}
