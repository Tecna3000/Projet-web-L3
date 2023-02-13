import { Component, Input, OnInit } from '@angular/core';
import {studentService} from "../services/student.service";



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() studentName!: string;
  @Input() studentStatus!: string ;
  @Input() id !: number;

  constructor(private studentService: studentService) { }
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
  onSwitch() {
    if(this.studentStatus === 'present') {
      this.studentService.switchOffOne(this.id);
    } else if(this.studentStatus === 'absent') {
      this.studentService.switchOnOne(this.id);
    }
  }
}
