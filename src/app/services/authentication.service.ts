import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private loggedinUserRole = '';
    login(role: string) {
        this.loggedinUserRole = role;
    }
    logout() {
        this.loggedinUserRole = '';
    }
    getUserRole() {
        return this.loggedinUserRole;
    }
}