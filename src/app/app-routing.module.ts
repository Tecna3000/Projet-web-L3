import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentViewComponent} from "./student-view/student-view.component";
import {AuthComponent} from "./auth/auth.component";
import {SingleStudentComponent} from "./single-student/single-student.component";
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {EditStudentComponent} from "./edit-student/edit-student.component";
import {AuthGuard} from "./services/auth-guard.service";
import {UserListComponent} from "./user-list/user-list.component";
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students' },
  { path: 'students', component: StudentViewComponent },
  { path: 'students/:id', component: SingleStudentComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditStudentComponent },
  { path: 'users', component: UserListComponent },
  {path: 'new-user', component: NewUserComponent},
  { path: 'not-found', component: FourOhFourComponent },
  //{ path: '**', redirectTo: 'not-found' },
];


@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
export const routedComponents = [ StudentViewComponent, AuthComponent];

