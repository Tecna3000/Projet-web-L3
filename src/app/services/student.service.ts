import {Injectable}  from "@angular/core";
import {Router} from "@angular/router";


@Injectable({
  providedIn : 'root'
}
)
export class studentService {
  constructor(private router:Router){}
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
      id: 3,
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


  getStudentById(id: number){
    const student = this.students.find(
      (student:any) => {
        return student.id === id;
      }
    );
    if(!student){
      this.router.navigate(['/not-found']).then(r =>{} );
    }
    return student;
  }
}

