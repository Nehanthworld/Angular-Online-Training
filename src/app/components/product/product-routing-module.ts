import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canDeactivateGuard } from '../../route-guards/can-deactivate.guard';
import { Product } from './product';
import { ProductDetails } from './product-details/product-details';
import { canActivateGuard } from '../../route-guards/can-activate.guard';
import { Catalog } from './catalog/catalog';

const routes: Routes = [
    {
        path: '', component: Product,
        canDeactivate: [canDeactivateGuard],
    },
    { path: 'products/:id', component: ProductDetails },
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
