import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentServiceService } from './student-service.service';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit{
  label : string = "Student-Card";
  studentInfo = [
    {
      name : "Sandeep Bandaru",
      rollId:"1",
      departmentId:"ECE",
      departmentName:"ECE",
      location:"Hyderabad"
    },
    {
      name : "Rasheed Khan",
      rollId:"2",
      departmentId:"ECE",
      departmentName:"ECE",
      location:"Hyderabad"
    },
    {
      name : "Basvaraj",
      rollId:"3",
      departmentId:"CSE1",
      departmentName:"CSE",
      location:"Hyderabad"
    },
    {
      name : "Rizwan Ahmed",
      rollId:"4",
      departmentId:"IT1",
      departmentName:"IT",
      location:"Hyderabad"
    }
  ]

  constructor(public studentServiceService: StudentServiceService){

  }
  ngOnInit(): void {
    
  }

  present(event : any){
    this.studentServiceService.setWhoIsPresent(event);
  }

}
