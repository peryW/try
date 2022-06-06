import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recipe } from 'src/models/Recipe';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  ImgResult:string;
  RecipeResult:Array<recipe>=new Array<recipe>();
  IdRecipe:number;
  constructor(public httpRecipe:HttpClient) { }
  changeRecipe(change:recipe):Observable<recipe>{
    return this.httpRecipe.post<recipe>("https://localhost:44390/api/Recipe/ChangeRecipe",change);
  }
  getByCode():Observable<recipe>
  {
    return this.httpRecipe.get<recipe>(`https://localhost:44390/api/Recipe/GetRecipeByCode/${this.IdRecipe}`);
  }
  getAllRecipe():Observable<recipe[]>{

    return this.httpRecipe.get<recipe[]>("https://localhost:44390/api/Recipe/GetAllRecipe");
  }
  addRecipe(myRecipe:recipe):Observable<boolean>{
   return this.httpRecipe.post<boolean>("https://localhost:44390/api/Recipe/PostAddRecipe",myRecipe);
     } 

 
  
  filterRecipe(f:any):Observable<recipe[]>{
    return this.httpRecipe.post<recipe[]>("https://localhost:44390/api/Recipe/filterRecipe",f);
  }
 

  
}
