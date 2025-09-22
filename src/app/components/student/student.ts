import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { GridColumn } from '../shared/common-grid/grid.model';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

  studentTableColums: GridColumn = {
    dataColumns: [{ dataKey: 'id', header: 'ID' },
    { dataKey: 'name', header: 'Name' },
    { dataKey: 'marks', header: 'Marks' }]
  }

  studentTableData: StudentModel[] = [
    { id: 1, name: 'John', marks: 85 },
    { id: 2, name: 'Jane', marks: 35 },
    { id: 3, name: 'Jim', marks: 78 },
    { id: 4, name: 'Jill', marks: 88 }
  ];

  @Input({ alias: 'student-name', required: true })
  name!: string;
  @Input() studentData!: any;

  @Output() studentOutput = new EventEmitter();




  count: number = 0;
  // @HostListener('document:click', ['$event'])
  // handleCount(event: any) {
  //   console.log(event);
  //   this.count++;
  // }
  // @HostListener('window:click', ['$event'])
  // handleCount1(event: any) {
  //   this.count++;
  // }





  handleButtonClick() {
    let student = this.studentData?.find((s: any) => s.name === 'John');
    //Write your own logic
    let myCustomObjet = {
      studentData: student,
      message: 'Data from child component',
      sampleNumber: 123
    }
    this.studentOutput.emit(myCustomObjet);
  }
  getStudentStyle(marks: number) {
    //DB logic
    return {
      'background-color': marks < 40 ? 'red' : 'lightgreen',
    };
  }
}
