import { afterEveryRender, afterNextRender, Component, HostListener, inject, signal } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false,
})
export class App {
  authenticationService = inject(AuthenticationService);
  router = inject(Router)

  constructor() {
    afterNextRender(() => {
      console.log('after application render');
    })
    afterEveryRender(() => {
      console.log('after application updated');
    })
  }


  login() {
    this.authenticationService.login('admin');
  }
  // title: string = 'Student Portal';
  // students = [{ id: 1, name: 'John', marks: 85 }, { id: 2, name: 'Jane', marks: 35 },
  // { id: 3, name: 'Jim', marks: 78 }, { id: 4, name: 'Jill', marks: 88 }];
  // parentData: any;
  handlerInParent(data: any) {
    //this.parentData = data;
  }
  clear() {
    this.router.navigate([{ outlets: { second: null } }])
  }
  load() {
    this.router.navigate([{ outlets: { second: 'products' } }])
  }
}
