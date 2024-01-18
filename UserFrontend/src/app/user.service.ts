import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

    public registerUser(user:User):Observable<any>{
      return this.httpClient.post<any>("http://localhost:8080/users/user",user);
    }
  
    public getUsers():Observable<any>{
      return this.httpClient.get("http://localhost:8080/users");
    }
  
    public getUserById(userId:number|undefined):Observable<any>{
      return this.httpClient.get("http://localhost:8080/users/"+userId);
    }
}
