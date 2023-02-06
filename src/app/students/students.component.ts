import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() studentName!: string;
  @Input() studentStatus!: string ;

  constructor() { }
  ngOnInit() {
  }
  getStatus() {
    return this.studentStatus; }

  getColor() {
   if(this.studentStatus === 'present') {
       return 'green';
   }
   else if(this.studentStatus === 'absent') {
       return 'red';
   }
   return true;
  }

}
