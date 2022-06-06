import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import Swal from 'sweetalert2';
import { CategoryService } from '../category.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myUser:User=this.mySer.myUser;
  myResult:string;
  constructor(public mySer:UserService,public myRouter:Router,public mySerCategory:CategoryService) { }
  
  ngOnInit(): void {
    this.mySerCategory.getAllCategory();

}
  allUser(){
    this.mySer.getAll().subscribe(succ => {  }, err => { console.log(err) });
  }
validation(){
    this.myResult=null;
    
    this.mySer.searchUser(this.myUser).subscribe(sacc => {
      if (sacc == "true"){
        Swal.fire("ברוכה הבאה לאתרינו!!","","success");
        this.myRouter.navigate(['allRecipes']);
     }
      else if (sacc == "false") {
        console.log("asdfghj");
        this.mySer.myUser.PassWordUser=null;
        Swal.fire("!!אינך רשום במערכת ","זוהי ההזדמנות להרשם","error");
        this.myRouter.navigate(['register']);
      }
      else {
       this.myResult=sacc;
      Swal.fire(":( סיסמה שגויה ","","error");
      }
    }

    ),
      error => { console.log("יש בעיה") }

  }
  saveLocal(){
    sessionStorage.setItem("myUser", JSON.stringify({ name: this.myUser.NameUser, paswword: this.myUser.PassWordUser }));

  }
  a(input ){
    console.log(input.type)
if(input.type=="password"){
input.type="text";
}
else{
  input.type="password";}
  }

eyeBtnClass(pass){
return{
'passw':true,
'special':pass.type=="text"
}
}
}

 



