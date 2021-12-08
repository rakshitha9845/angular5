import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
getName(){
console.log("button is working")
}
keyUp(par){
console.log(par);
return par;
}
keyDown(par){
  console.log(par);
  return par;
  }
  keyPress(par){
    console.log(par);
    return par;
    }
    name="Bruce"
    diabledBox=true
    enableInput(){
      this.diabledBox=false
    }
pholder="enter first name"
changeholder(){
  this.pholder="enter last name"
}
day=true;
greet="hi";
names1=[
  'abc',
  'pqr'
]
names=[
  {
    fname:"abc",
    age:22
  },{
    fname:"pqr",
    age:32
  },{
    fname:"xyz",
    age:25
  }
]
}
