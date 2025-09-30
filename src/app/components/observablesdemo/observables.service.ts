import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, of, ReplaySubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ObservablesService {
    data: string = "abc";

    // obs$ = new Observable<any>((observer) => { 
    //     observer.next(Math.random());  
    // });
    obsSubject$ = new Subject();
    obsBehaviorSubject$ = new BehaviorSubject(0);
    obsReplaySubject$ = new ReplaySubject(1);
    loader$ = new BehaviorSubject<boolean>(false);
    numbers$ = new Observable<number>((observer) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.complete();
    })
    constructor() {

    }
    backendCall(){
      //  this.loader$.next(true);
        setTimeout(() => {
            //this.loader$.next(false);
        }, 3000);
    }
    getDataWithPromise() {
        let promise = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if (this.data)
                    resolve(this.data);
                else
                    reject("No data found");
            }, 3000);
        });
        return promise;
    }
    getDataWithPromise1() {
        let promise = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if (this.data)
                    resolve('second promise data');
                else
                    reject("No data found");
            }, 6000);
        });
        return promise;
    }


}