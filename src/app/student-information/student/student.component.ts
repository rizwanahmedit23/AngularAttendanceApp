import { Component , EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnChanges, OnInit{
  @Input() studentDetail:any;
  @Input() label: string = "";
  @Output() emitStudentAttendance = new EventEmitter();
  constructor(public studentServiceService: StudentServiceService){}

  ngOnChanges(changes : SimpleChanges){
    console.log("ngOnChange", changes)
  }
  ngOnInit(): void{
  }

  submitName(name : string){
    this.emitStudentAttendance.emit(name);
  }
}
