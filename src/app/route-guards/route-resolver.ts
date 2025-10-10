//Route match
    //Load the data  from DB -- if you pass from here, it will be rendering page with data
//navigate to that route
//create component instance
    //Load the data  from DB -- if it takes time, component renders empty page first
//render the component

import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "../components/product/product-service";
import { inject } from "@angular/core";

export const dataResolver : ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
    let productService = inject(ProductService)
    return productService.getProducts();
}