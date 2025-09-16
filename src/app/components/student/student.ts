import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  students = [{ id: 1, name: 'John', marks: 85 }, { id: 2, name: 'Jane', marks: 35 },
  { id: 3, name: 'Jim', marks: 78 }, { id: 4, name: 'Jill', marks: 88 }];


  name = 'Angular';

  getStudentStyle(marks: number) {
    //DB logic
    return {
      'background-color': marks < 40 ? 'red' : 'lightgreen',
    };
  }
}
