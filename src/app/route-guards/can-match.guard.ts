import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";

//data: { roles: [{ role: 'admin', privileges: ['view', 'edit', 'create', 'delete'] }], },
//
export const canMatchGuard: CanMatchFn = (route: Route,
    segments: UrlSegment[]) => {
    let router = inject(Router);

    //check subscription and return validity
return true;
    return router.navigate(['notfound']);
}
