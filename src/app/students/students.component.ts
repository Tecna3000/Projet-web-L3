
import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentName: string = 'Henri';
  studentStatus : string = 'present';
  constructor() { }
  ngOnInit() {
  }
  getStatus() {
    return this.studentStatus; }
}
