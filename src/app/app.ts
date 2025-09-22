import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
})
export class App {
  title: string = 'Student Portal';
  students = [{ id: 1, name: 'John', marks: 85 }, { id: 2, name: 'Jane', marks: 35 },
  { id: 3, name: 'Jim', marks: 78 }, { id: 4, name: 'Jill', marks: 88 }];
  parentData: any;
  handlerInParent(data: any) {
    this.parentData = data;
  }

}
