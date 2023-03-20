import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import {studentService} from "./services/student.service";
import { AuthComponent } from './auth/auth.component';
import { StudentViewComponent } from './student-view/student-view.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./services/auth.service";
import { SingleStudentComponent } from './single-student/single-student.component';
import {EditStudentComponent} from "./edit-student/edit-student.component";
import {UserListComponent} from "./user-list/user-list.component";
import {NewUserComponent} from "./new-user/new-user.component";
import { AuthGuard } from './services/auth-guard.service';
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component";
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AuthComponent,
    StudentViewComponent,
    SingleStudentComponent,
    EditStudentComponent,
    UserListComponent,
    NewUserComponent,
    FourOhFourComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [studentService, AuthService, AuthGuard, UserListComponent,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
