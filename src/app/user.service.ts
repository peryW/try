import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
myUser:User=new User("","","","","");
  constructor(public httpUser:HttpClient) {
   }
   getAll():Observable<User[]>{
    return this.httpUser.get<User[]>("https://localhost:44390/api/User/GetAllUser");
  }
   searchUser(myUser:User):Observable<string>{
     return this.httpUser.post<string>("https://localhost:44390/api/User/PostUserHere",myUser);
   }
   addUser(myUser:User):Observable<boolean>{
    return this.httpUser.post<boolean>("https://localhost:44390/api/User/PostAddUser",myUser);
      } 
    userForEdit(IdUser:number):Observable<string>{
       return this.httpUser.get<string>(`https://localhost:44390/api/User/nameForEdit/${IdUser}`);
         } 
    IdName(name:string):Observable<number>{
        return this.httpUser.get<number>(`https://localhost:44390/api/User/IdName/${name}`);
       } 
}
