import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ObservablesService {
    data: string = "abc";

    // obs$ = new Observable<any>((observer) => { 
    //     observer.next(Math.random());  
    // });
    obs$ = new ReplaySubject(0);
    constructor() {

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