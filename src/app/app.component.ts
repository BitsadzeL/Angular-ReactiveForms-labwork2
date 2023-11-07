import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forMidterm';
  color='instock';
  cnt=10;
  example='show';
  text="In stock";

  user:string="washale da akrife rame";

  texthide:boolean=false;

  purchase(){    
    this.cnt--;
    console.log("We have "+this.cnt+" left");
    if(this.cnt==0){
      this.color='sold';
      this.text="out of stock";
    }
  }
}
