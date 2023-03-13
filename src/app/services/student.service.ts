import {SingleStudentComponent} from "../single-student/single-student.component";

export class studentService {
  constructor(private singleStudentComponent:SingleStudentComponent){}
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
  switchOnAll() {
    for(let student of this.students) {
      student.status = 'present';
    }
  }
  switchOffAll() {
    for(let student of this.students) {
      student.status = 'absent';
    }
  }
  switchOnOne(i: number) {
    this.students[i].status = 'present';
  }
  switchOffOne(i: number) {
    this.students[i].status = 'absent';
  }

}

