import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-to-do/list-to-do.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpclient: HttpClient) { }

  getTodoForUser(username:string){
    return this.httpclient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`) ; 
   }
  deleteToDoById(username:string,id:number){
    return this.httpclient.delete(`http://localhost:8080/users/${username}/todos/${id}`) ; 
  }
}
