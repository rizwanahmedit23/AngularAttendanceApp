import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { StudentServiceService } from './student-information/student-service.service';
import { StudentComponent } from './student-information/student/student.component';
import { FormsModule } from '@angular/forms';


@NgModule({ // meta data
  // Components , pipes
  declarations: [
    AppComponent,
    StudentInformationComponent,
    StudentComponent,
  ],
  // modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // services
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
