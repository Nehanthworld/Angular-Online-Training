import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";


export const canActivateChildGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
    let router = inject(Router);
    let authenticationService = inject(AuthenticationService);
    if(authenticationService.hasPermission(route.data))
        return true;
    else {
        return router.navigate(['/notfound']);
    }
}

