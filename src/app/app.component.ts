import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project';
  constructor(public mySerCategory:CategoryService) { }
  

  ngOnInit(): void {
    this.mySerCategory.getAllCategory();

}
name(){
  let u= JSON.parse(sessionStorage.getItem("myUser"));
  if(u==null)
  return "guest"
  return u.name;
}

}
