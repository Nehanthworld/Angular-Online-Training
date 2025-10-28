import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    userNames = ['venkat', 'chaitanya', 'rk']

    checkUserName(username: string) {
        //APIService.get('url/username')
        return of(this.userNames.includes(username))
    }
    getToken(){
        return localStorage.getItem('token')??'45353kljlsdf';
    }
    setToken(token: string){
        localStorage.setItem('token', token);
    }
}