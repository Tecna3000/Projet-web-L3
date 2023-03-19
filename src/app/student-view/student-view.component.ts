import {Component, Input, OnInit} from '@angular/core';
import {studentService} from "../services/student.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit{
  @Input() id: number | undefined;
  isAuth: boolean = false;
  students!: any[];
  studentSubscription: Subscription | any;
  lastUpdate:Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 3000
    );
  });


  constructor(private studentService: studentService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  allAbsent() {
    if(confirm('Etes-vous sûr quils sont tous absents ?')) {
      this.studentService.switchOffAll();
    } else {
      return null;
    }
    return null
  }

  allPresent() {
    alert('Ils sont tous là !');
    this.studentService.switchOnAll();
  }



  ngOnInit() {
    this.studentSubscription = this.studentService.studentsSubject.subscribe(
      (students: any[]) => {
        this.students = students;
      }
    );
    this.studentService.emitStudentSubject();

  }

  ngOnDestroy(): void {
    this.studentSubscription.unsubscribe();
  }


}
