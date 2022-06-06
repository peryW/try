import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { recipe } from 'src/models/Recipe';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input()
  myRecipe:recipe;
  arr:Number[];
  arrAll:number[];
  nameForEdit:string;
  u = JSON.parse(sessionStorage.getItem("myUser"));
constructor(public mySerRecipe:RecipeService,public mySerUser:UserService,public myRouter:Router) { }

ngOnInit(): void {
  // פונקציה המחזירה את השם של המשתמש לפי הקוד של המשתמש שהכניס את המתכון
  if(this.myRecipe.IdUser)
  this.mySerUser.userForEdit(this.myRecipe.IdUser).subscribe(succ => {this.nameForEdit=succ  }, err => { console.log(err) });
}
// כשלוחצים על התמונה הוא הולך לקומפוננטה שמציגים יותר בפרוט את המתכון
show(img :string){
this.mySerRecipe.ImgResult=img;
this.myRouter.navigate(['RecipeDetails']);
}
// פונקציה להוספת הכוכבים ברמת קושי
counter(num:number){
  this.arr=new Array(num);
return this.arr;
}
// פונקציה להוספת הככובים השחורים לרמת קושי
counterAll(num:number){
  this.arrAll=new Array(num);
return this.arrAll;
}
// פוקציה לעריכת המתכון 
edit(idRecipe:number){
  this.mySerRecipe.IdRecipe=idRecipe;
  this.myRouter.navigate(['EditRecipeComponent']);
     
 }
  

}
