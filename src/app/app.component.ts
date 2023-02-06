import {Component, OnInit} from '@angular/core';
import {StudentService} from "./services/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tp1-web';
  isAuth = false;
  students!: any;
  lastUpdate:Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 3000
    );
  });


  constructor(private studentService: StudentService) {
     setTimeout(
       () => {
         this.isAuth = true;
       }, 4000
     );
   }

  allPresent() {
    alert('Ils sont tous là !');
  }

  ngOnInit(): void {
    this.students=this.studentService.students;
  }
}
