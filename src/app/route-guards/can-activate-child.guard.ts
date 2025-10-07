import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";


export const canActivateChildGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
//return false;


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

