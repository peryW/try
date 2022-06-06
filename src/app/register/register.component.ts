import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/User';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
import{ConfirmValidation} from 'src/Validation';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
myUser:User;
myResult:boolean;
two:string="";
// myForm:FormGroup;
  constructor(public mySer:UserService,public myRouter:Router) { 
  }
  ngOnInit(): void {
    this.myUser=this.mySer.myUser;
  //   this.myForm=new FormGroup({
  //     "passwordone":new FormControl("",[Validators.pattern("[A-Za-z0-9]{6,10}"),Validators.required]),
  //     "passwordtwo":new FormControl("",[Validators.pattern("[A-Za-z0-9]{6,10}"),Validators.required])
  //   })
  //   ConfirmValidation.Confirm("passwordone", "passwordtwo");
  }
  // מוסיף משתמש
  addUser(){
    this.myResult=null;
    this.mySer.addUser(this.myUser).subscribe(sacc => {
      if (sacc == true){
        Swal.fire("ברוכה הבאה לאתרינו!!","","success");
        this.myRouter.navigate(['allRecipes']);
        
      }
      else if (sacc == false) {
        Swal.fire("אתה רשום כבר במערכת","","error");
        this.myRouter.navigate(['login']);
      }
      else {
       this.myResult=sacc;
      }
    }

    ),
      error => { console.log("יש בעיה") }
  }
  // שומר את המשתמש בסשן סטורג
  saveLocal(){
    sessionStorage.setItem("myUser", JSON.stringify({ name: this.myUser.NameUser, paswword: this.myUser.PassWordUser }));

  }
  eyeBtnClass(pass){
    return{
    'passw':true,
    'special':pass.type=="text"
    }
  }
  a(input ){
    console.log(input.type)
if(input.type=="password"){
input.type="text";
}
else{
  input.type="password";}
  }
  eyeBtnClass2(pass){
    return{
    'passww':true,
    'speciall':pass.type=="text"
    }
  }
  b(input ){
    console.log(input.type)
if(input.type=="password"){
input.type="text";
}
else{
  input.type="password";}
  }
  valid(){
    if(this.myUser.PassWordUser!=""&&this.myUser.PassWordUser!=null&&this.two!=""&&this.two!=null){
      return ConfirmValidation.Confirm(this.myUser.PassWordUser,this.two);
     
    }return true;
  }
}


