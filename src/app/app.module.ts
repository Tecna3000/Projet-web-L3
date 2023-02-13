import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import {studentService} from "./services/student.service";
import { AuthComponent } from './auth/auth.component';
import { StudentViewComponent } from './student-view/student-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AuthComponent,
    StudentViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [studentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
