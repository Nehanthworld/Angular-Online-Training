import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { Product } from "../components/product/product";

export interface ICanComponentDeactivate {
    canDeactivate(): boolean;
}
export const canDeactivateGuard: CanDeactivateFn<ICanComponentDeactivate> = (
    component: ICanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {

    if (component.canDeactivate())
        return confirm("You have unsaved changes. Do you really want to leave?");
    return true;
}