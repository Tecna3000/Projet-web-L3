import { Routes, RouterModule } from '@angular/router';
import {StudentViewComponent} from "./student-view/student-view.component";
import {AuthComponent} from "./auth/auth.component";
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students' },
{ path: 'students', component: StudentViewComponent },
{ path: 'auth', component: AuthComponent }
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export const routedComponents = [StudentViewComponent, AuthComponent];
