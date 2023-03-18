import {SingleStudentComponent} from "../single-student/single-student.component";
import {Injectable}  from "@angular/core";


@Injectable({
  providedIn : 'root'
}
)
export class studentService {
  constructor(private singleStudentComponent:SingleStudentComponent){}
  students = [
    {
      id :1,
      name: 'Louis',
      status: 'present'
    },
    {
      id: 2,
      name: 'Charles',
      status: 'absent'
    },
    {
      ide: 3,
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

  getStudentById(id: number) {
    const student = this.students.find(
      (s) => {
        return s.id === id;
      }
    );
    return student;
  }

}

