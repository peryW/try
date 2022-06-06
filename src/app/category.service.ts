import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CategoryResult:Category[]=[];
  constructor(public httpCategory:HttpClient) { }
  
  getAllCategory(){
     this.httpCategory.get<Category[]>("https://localhost:44390/api/Category/GetAllCategory").subscribe(x=>{
     this.CategoryResult=x;
    })
  }
  AllCategory():Observable<Category[]>{
   return this.httpCategory.get<Category[]>("https://localhost:44390/api/Category/GetAllCategory")
    
 }
 getByCode(code)
 {
   return this.httpCategory.get<Category>(`https://localhost:44390/api/Category/byCode/${code}`);
 }
}
