import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tp1-web';
  isAuth = false;
  lastUpdate:Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 3000
    );
  });


  students = [
    {
      name: 'Louis',
      status: 'present'
    },
    {
      name: 'Charles',
      status: 'absent'
    },
    {
      name: 'Henri',
      status: 'present'
    }
  ];

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
