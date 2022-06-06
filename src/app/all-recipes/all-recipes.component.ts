import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent  implements OnInit{
  allrecipe:Array<recipe>;
  copy:Array<recipe>;
  myCategoryArr :Category[];
  name:string;
  IdCategory:number;
  preption:number;
  u= JSON.parse(sessionStorage.getItem("myUser"));
  constructor(public mySer:RecipeService ,public mySerCategory:CategoryService,public myRouter:Router) { }
  ngOnInit(): void {
    // מקבלת את המתכונים
    this.mySer.getAllRecipe().subscribe(succ => { this.allrecipe=succ;this.copy=succ;console.log(succ) }, err => { console.log(err) });
    this.mySerCategory.AllCategory().subscribe(succ => { this.myCategoryArr=succ; }, err => { console.log(err) });
   
    if(this.u==null)
    sessionStorage.setItem("myUser", JSON.stringify({ name: "guest", paswword: 123456 }));

} 
// סינון המתכונים
filterRecipe(){
this.copy=this.allrecipe;
if(this.name){
  this.copy=this.copy.filter(y=> y.NameRecipe.indexOf(this.name)>=0)
}
if(this.IdCategory){
  this.copy=this.copy.filter(y=> y.IdCategory==this.IdCategory)
}
if(this.preption){
  this.copy=this.copy.filter(y=> y.PreparationTime<=this.preption)
}
}
// לנקות סינון
clear(){
  this.copy=this.allrecipe;
  this.name=null;
this.preption=null;
this.IdCategory=null;
}
add(){
  this.myRouter.navigate(['AddRecipeComponent']);
}

}
