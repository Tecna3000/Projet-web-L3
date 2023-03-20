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
      id :0,
      name: 'Louis',
      status: 'present'
    },
    {
      id: 1,
      name: 'Charles',
      status: 'absent'
    },
    {
      id: 2,
      name: 'Henri',
      status: 'present'
    }
  ];
  switchOnAll() {
    for(let student of this.students) {

      student.status = 'present';
      this.emitStudentSubject();
    }
  }
  switchOffAll() {

    for(let student of this.students) {
      student.status = 'absent';
      this.emitStudentSubject();

    }
  }
  switchOnOne(i: number) {
    console.log( i);
    this.students[i].status = 'present';
    this.emitStudentSubject();
  }
  switchOffOne(i: number) {
    this.students[i].status = 'absent';
    this.emitStudentSubject();
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

