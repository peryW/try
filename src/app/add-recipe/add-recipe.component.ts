import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { recipe } from 'src/models/Recipe';
import Swal from 'sweetalert2';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
myCategoryArr :Category[]=this.mySerCategory.CategoryResult;
addRecipe:recipe=new recipe(null,null,null,null,null,null,null,null,null,null,null);
arr:string[]=[""];
arr2:string[]=[""];
sanitizer: any;
id:number;
u= JSON.parse(sessionStorage.getItem("myUser"));

constructor(public mySerCategory:CategoryService, public mySerRecipe:RecipeService,public mySerUser:UserService,public myRouter:Router) { }

ngOnInit(): void {
   this.mySerUser.IdName(this.u.name).subscribe(succ => {this.id=succ;console.log(succ); }, err => { console.log(err) });
   }
   // פונקציה להעלת התמונה
fileChangeEvent(fileInput: any) {
  if (fileInput.target.files && fileInput.target.files[0]) {
    console.log("fileInput: " + fileInput.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.target.files[0]);
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      this.addRecipe.ImgRecipe = e.target.result;
    };
  }
}
  // פונקציה בשביל רשימת הרכיבים ושלא יהיה יותר מתיבת קלט אחת ריקה
  list(){
  this.arr=this.arr.filter(x => x!="");
  this.arr.push("");
}
   // פונקציה בשביל אופן ההכנה ושלא יהיה יותר מתיבת קלט אחת ריקה
list2(){
   this.arr2=this.arr2.filter(x => x!="");
  this.arr2.push("");

}
//פונקציה בשביל הליסטים שלא כל אות יקפוץ הסמן שיהיה רצף
trackByIdx(index: number, obj: any): any {
  return index;
} 
// פונקציה להוספת המתכון
  AddRecipe(){
    this.arr2=this.arr2.filter(x => x!="");
    this.arr=this.arr.filter(x => x!="");
    this.addRecipe.ListOfComponents=this.arr;
    this.addRecipe.Preparation=this.arr2;
    this.addRecipe.IdUser=this.id;
    Swal.fire(':) המתכון נוסף בהצלחה ','','success');
     this.mySerRecipe.addRecipe(this.addRecipe).subscribe(sacc => {
         if (sacc == true){
             console.log("הצלחת");
            this.myRouter.navigate(['allRecipes']);
        }
        else if (sacc == false) {
          console.log("המתכון רשום כבר");
        }
        else {
        console.log();        }
      }
        ),
        error => { console.log("יש בעיה") }
        
    }

}

