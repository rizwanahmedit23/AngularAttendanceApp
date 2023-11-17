// import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
export class StudentServiceService {
  // studentsPresent : string[] = []
  studentPresent = new BehaviorSubject<string>("");
  constructor() { }
  getStudentsAttendanceDetails(){
    return this.studentPresent;
  }
  setWhoIsPresent(studentName: string){
    this.studentPresent.next(studentName);
  }
}
