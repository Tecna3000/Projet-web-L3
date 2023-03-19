import {Component} from '@angular/core';
import { studentService } from './services/student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student-app';
  secondes : number | any;

}
// import {Component, Input, OnDestroy, OnInit} from '@angular/core';
// import { Observable, Subscription ,interval} from 'rxjs';
// import { studentService } from './services/student.service';
//
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit, OnDestroy {
//   title = 'my-students-app';
//   secondes : number | any;
//   counterSubscription: Subscription | any;
//
//   ngOnInit(){
//     const counter = Observable.interval(1000);
//     this.counterSubscription = counter.subscribe(
//       (value: any) => {
//         this.secondes = value;
//       },
//       (error: string) => {
//         console.log('An error occured ! : ' + error);
//       },
//       () => {
//         console.log('Observable complete!');
//       }
//     );
//   }
//   ngOnDestroy() {
//     this.counterSubscription.unsubscribe();
//   }
//
// }
//
