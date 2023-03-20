import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {studentService} from "../services/student.service";

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit{
  name : string = "etudiant";
  status : string =" status";

  student:any;

  constructor(private studentService : studentService, private route: ActivatedRoute ) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.student= this.studentService.getStudentById(+id);
    this.name=this.student?.name;
    this.status=this.student?.status;
  }
}
