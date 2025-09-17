import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

  constructor() {
    setTimeout(() => {
      this.handleButtonClick();
    }, 5000);
  }
  @Input({ alias: 'student-name', required: true })
  name!: string;
  @Input() studentData!: any;

  @Output() studentEvent = new EventEmitter();


  handleButtonClick() {
    let student = this.studentData?.find((s: any) => s.name === 'John');
    this.studentEvent.emit(student);
  }
  getStudentStyle(marks: number) {
    //DB logic
    return {
      'background-color': marks < 40 ? 'red' : 'lightgreen',
    };
  }
}
