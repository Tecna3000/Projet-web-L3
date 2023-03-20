import {Injectable}  from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs";


@Injectable({
  providedIn : 'root'
}
)
export class studentService {
  studentsSubject = new Subject<any[]>()
  constructor(private router:Router){}
  private students = [
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
      id: 3,
      name: 'Henri',
      status: 'present'
    }
  ];
  switchOnAll() {
    for(let student of this.students) {
      this.emitStudentSubject();
      student.status = 'present';
    }
  }
  switchOffAll() {
    this.emitStudentSubject();
    for(let student of this.students) {
      student.status = 'absent';
    }
  }
  switchOnOne(i: number) {
    this.emitStudentSubject();
    this.students[i].status = 'present';
  }
  switchOffOne(i: number) {
    this.emitStudentSubject();
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

  emitStudentSubject() {
    this.studentsSubject.next(this.students.slice());
  }

  addStudent(name: string, status: string) {
    const studentObject = {
      id: 0,
      name: '',
      status: ''
    };
    studentObject.name = name;
    studentObject.status = status;
    studentObject.id = this.students[(this.students.length - 1)].id + 1;
    this.students.push(studentObject);
    this.emitStudentSubject();
  }
}

