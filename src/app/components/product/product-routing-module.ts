import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canDeactivateGuard } from '../../route-guards/can-deactivate.guard';
import { Product } from './product';
import { ProductDetails } from './product-details/product-details';
import { canActivateGuard } from '../../route-guards/can-activate.guard';
import { Catalog } from './catalog/catalog';
import { ProductAdd } from './addorupdate/product-add/product-add';

const routes: Routes = [
    {
        path: '', component: Product,
        canDeactivate: [canDeactivateGuard],
    },
    {
        path: 'add', component: ProductAdd
    },
    { path: ':id/:name', component: ProductDetails },
    {
        path: 'catalog',
        component: Catalog,
        canActivate: [canActivateGuard],
        data: { allow_annonymous: true }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
