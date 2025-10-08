import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

    //data: { roles: [{ role: 'admin', privileges: ['view', 'edit', 'create', 'delete'] }], },
//
export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
    let router = inject(Router);
    let authenticationService = inject(AuthenticationService);
    if(authenticationService.hasPermission(route.data))
        return true;
    else {
        return router.navigate(['/notfound']);
    }
}