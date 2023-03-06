import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentViewComponent} from "./student-view/student-view.component";
import {AuthComponent} from "./auth/auth.component";




const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students' },
{ path: 'students', component: StudentViewComponent },
{ path: 'auth', component: AuthComponent }
];


@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }

