import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { CategoryService } from '../category.service';
import { recipe } from 'src/models/Recipe';
import { Category } from 'src/models/Category';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent  implements OnInit{
  myRecipe:recipe;
  myCategory:Category;
  img:string;
  arr:Number[];
  arrAll:number[];
  nameForEdit:string;
   u = JSON.parse(sessionStorage.getItem("myUser"));

    constructor(public mySerRecipe:RecipeService,public mySerCategory:CategoryService,public mySerUser:UserService,public myRouter:Router) { }
  ngOnInit(): void {
    this.mySerRecipe.getAllRecipe().subscribe(succ => { 
      this.mySerRecipe.RecipeResult=succ; 
      this.show();
    }, err => { console.log(err) });
    // this.mySerCategory.getAllCategory().subscribe(succ => { this.mySerCategory.CategoryResult=succ ; console.log(this.mySerCategory.CategoryResult);this.show(); }, err => { console.log(err) });
 
  }
  // פונקציה בשביל הכוכבים 
  counter(num:number){
    this.arr=new Array(num);
  return this.arr;
  }
  // פונקציה בשביל הכוכבים
  counterAll(num:number){
    this.arrAll=new Array(num);
  return this.arrAll;
  }
  // פונקציה לעריכת המתכון
  edit(idRecipe:number){
   this.mySerRecipe.IdRecipe=idRecipe;
      // this.mySerRecipe.ImgResult=img;
      this.myRouter.navigate(['EditRecipeComponent']);
      
  }
  // פונקציה המראה את כל הפרטים
  show(){
    
    this.img=this.mySerRecipe.ImgResult
    for(let i=0;i<this.mySerRecipe.RecipeResult.length;i++){
      if(this.mySerRecipe.RecipeResult[i].ImgRecipe==this.img){
      this.myRecipe=this.mySerRecipe.RecipeResult[i];
      }
    }
    if(this.myRecipe!=null)
    for(let i=0;i<this.mySerCategory.CategoryResult.length;i++){
      if(this.mySerCategory.CategoryResult[i].IdCategory==this.myRecipe.IdCategory){
        this.myCategory=this.mySerCategory.CategoryResult[i]
      }
    }
    // פונקציה המחזירה את השם של היוזר לפי המשתמש שהכניס את המתכון
    this.mySerUser.userForEdit(this.myRecipe.IdUser).subscribe(succ => {this.nameForEdit=succ  }, err => { console.log(err) });
    
  }
prevRec(){
  this.myRouter.navigate(["RecipeDetails"])
}
allRecipes(){
  this.myRouter.navigate(["allRecipes"])
}
nextRec(){
  this.myRouter.navigate(["RecipeDetails"])
}
}
