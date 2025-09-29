import { Component } from '@angular/core';
import { ObservablesService } from './observables.service';

@Component({
  selector: 'app-observablesdemo',
  standalone: false,
  templateUrl: './observablesdemo.html',
  styleUrl: './observablesdemo.css'
})
export class Observablesdemo {
  message: string = "Loading data...";
  message2: string = "Loading data...";
  constructor(private observablesService: ObservablesService) {
    observablesService.obs$.
      subscribe({
        next: (data) => {
          this.message += "Data received:" + data;
        },
        error: (error) => {
          this.message = "Error:" + error;
        },
        complete: () => {
          this.message = "Data stream completed";
        }
      });

    ////Promise Demo
    // observablesService.getDataWithPromise().then((data) => {
    //   this.message = "Success:" + data;
    // }).catch((error) => {
    //   this.message = "Error:" + error;
    // });

    // observablesService.getDataWithPromise1().then((data) => {
    //   this.message = "Success:" + data;
    // }).catch((error) => {
    //   this.message = "Error:" + error;
    // });
  }

  buttonClick() {
        this.observablesService.obs$.next(Math.random());
        this.observablesService.obs$.next(Math.random());
        this.observablesService.obs$.next(Math.random());
        this.observablesService.obs$.next(Math.random());
        this.observablesService.obs$.next(Math.random());
        this.observablesService.obs$.next(Math.random());
        this.observablesService.obs$.next(Math.random());
        this.observablesService.obs$.next(Math.random());
    
  }
}
