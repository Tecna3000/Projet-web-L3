import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tp1-web';
  isAuth = false;
  studentOne = "Henri";
  studentTwo ="Charles";
  studentThree = "Louis";
   constructor() {
     setTimeout(
       () => {
         this.isAuth = true;
       }, 4000
     );
   }

  allPresent() {
    alert('Ils sont tous là !');
  }
}
