import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{User}from 'src/app/model/user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

   name : string = "";
   age : number = 0;
   email : string = "";
   genre : string = "notDefined";
   userList : User[] =[];

  constructor() { }

  ngOnInit(): void {
  }
  addUser():void {
    this.userList.push(new User(this.name,this.age,this.email , this.genre));
    console.log(this.genre)
    console.log(this.userList);
  }

  getClass(age : number) : string{
    if(age<18) return "userClass userYonger";
   else if(age>=18 && age <= 65) return "userClass user";
   else return "userClass userOlder";
  }

}
