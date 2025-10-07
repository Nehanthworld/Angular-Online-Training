import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";


export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
    let router = inject(Router);
    let authenticationService = inject(AuthenticationService);
    if(route.data['allow_annonymous'] === true){
        return true;
    }
    else if (route.data['roles'].includes(authenticationService.getUserRole())) {
        return true;
    }
    else {
        return router.navigate(['/notfound']);
    }
}