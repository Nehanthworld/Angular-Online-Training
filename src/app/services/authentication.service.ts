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
    hasPermission(routeData: any): boolean {
        if (routeData['allow_annonymous'] === true) {
            return true;
        }
        else if (routeData['roles'].filter((role: any) => role.role === this.getUserRole()).length > 0) {
            return true;
        }
        return false;
    }
}