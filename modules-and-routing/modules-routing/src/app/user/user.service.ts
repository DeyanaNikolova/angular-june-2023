import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/User';


@Injectable({
  providedIn: 'root'
})
export class UserService  {

  constructor(private http: HttpClient) { }


  fetchUsers(){
   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
