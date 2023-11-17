import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { StudentServiceService } from './student-information/student-service.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  dashboardDetails  = new Set<string>();
  studentSubscription : Subscription;
  title = 'AngularAppDemo';
  arr = [1,2,3];
  constructor(public studentServiceService: StudentServiceService){
    this.studentSubscription = this.studentServiceService.getStudentsAttendanceDetails().subscribe(data => this.dashboardDetails.add(data));
    console.log("App - ngOnInit")
  }
  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    console.log("App - ngOnChanges")
  }
  ngDoCheck(): void {
    console.log("App - ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("App - ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("App - ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("App - ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("App - ngAfterViewChecked")    
  }
  ngDestroy(){
    if(this.studentSubscription){
      this.studentSubscription.unsubscribe();
    }
  }
}
