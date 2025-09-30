import { Component } from '@angular/core';
import { ObservablesService } from './observables.service';
import { map, skip, takeLast, tap } from 'rxjs';

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
    observablesService.numbers$.pipe(
      tap(n => {
        console.log('Before map:', n);
      }), map(n => n * 2),
      tap(n => {
        console.log('After map:', n);
      }),
    takeLast(3),
  skip(1)).
      subscribe({
        next: (data) => {
          this.message += "Data received:" + data;
        },
        error: (error) => {
          this.message = "Error:" + error;
        },
        complete: () => {
          //this.message = "Data stream completed";
        }
      });


    // observablesService.obsReplaySubject$.
    //   subscribe({
    //     next: (data) => {
    //       this.message += "Data received:" + data;
    //     },
    //     error: (error) => {
    //       this.message = "Error:" + error;
    //     },
    //     complete: () => {
    //       this.message = "Data stream completed";
    //     }
    //   });

    // observablesService.obsReplaySubject$.next(1);//1
    // setTimeout(() => {
    //   observablesService.obsReplaySubject$.next(2);//1,2
    // }, 3000);
    // setTimeout(() => {
    //   observablesService.obsReplaySubject$.next(3);
    // }, 6000);
    // setTimeout(() => {
    //   observablesService.obsReplaySubject$.next(4);
    // }, 9000);
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
    this.observablesService.obsReplaySubject$.
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

  }
}
