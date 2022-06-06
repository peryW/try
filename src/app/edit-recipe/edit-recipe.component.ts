import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { recipe } from 'src/models/Recipe';
import Swal from 'sweetalert2';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
IdRecipe=this.mySerRecipe.IdRecipe;
myRecipe:recipe;
copyRecipe:recipe;
arr:string[];
arr2:string[];
myCategoryArr :Category[]=this.mySerCategory.CategoryResult;
  constructor(public active: ActivatedRoute,public mySerRecipe:RecipeService,public mySerCategory:CategoryService,public myRouter:Router) { 
  }
  
 
  ngOnInit(): void {
    this.mySerRecipe.getByCode().subscribe(succ=>{this.myRecipe={...succ} ;this.copyRecipe={...succ};
      this.arr=this.copyRecipe.ListOfComponents;this.arr2=this.copyRecipe.Preparation; },err => { console.log("error byCode1") });
  //  this.mySerCategory.AllCategory().subscribe(succ => { this.myCategoryArr=succ ;}, err => { console.log(err) });

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
   // פונקציה לביטול השינויים
  cencel(){
    Swal.fire({
      title: 'אתה בטוח שאתה רוצה לשנות את השינויים?',
      text: 'לא תוכל לשחזר את השינויים',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancal'
    }).then((result) => {
      if (result.value) {
        this.copyRecipe={...this.myRecipe};
        Swal.fire(
          'cencel!',
          'חזרת למקור....',
          
        )
      }
      //  else if (result.dismiss === Swal.DismissReason.cancel) {
      //   Swal.fire(
      //     'בחירה נכונה',
      //     'שמחים שנשארת איתנו :)',
          
      //   )
      // }
    })


  }
   
 
  // פונקציה לשמירת הנתונים שהשתנו ומנתבת לכל המתכונים
  keep(){
    this.arr=this.arr.filter(x => x!="");
    this.arr2=this.arr2.filter(x => x!="");
    this.copyRecipe.ListOfComponents=this.arr;
    this.copyRecipe.Preparation=this.arr2;
    Swal.fire(':) המתכון נשמר בהצלחה ','','success');
this.mySerRecipe.changeRecipe(this.copyRecipe).subscribe(succ => {
   this.myRecipe=succ ;console.log(this.myRecipe);this.myRouter.navigate(['allRecipes']);}, err => { console.log(err) });
    this.myRecipe=this.copyRecipe;
  }
  // פונקצית להעלת התמונה
  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      console.log("fileInput: " + fileInput.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(fileInput.target.files[0]);
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        this.copyRecipe.ImgRecipe = e.target.result;
      };
    }
  }

}

