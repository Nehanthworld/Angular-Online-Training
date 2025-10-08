import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './components/product/product';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product/product-details/product-details';
import { Home } from './components/home/home';
import { Catalog } from './components/catalog/catalog';
import { Orders } from './components/orders/orders';
import { OrderDetails } from './components/shared/order-details/order-details';
import { Account } from './components/account/account';
import { canActivateGuard } from './route-guards/can-activate.guard';
import { canActivateChildGuard } from './route-guards/can-activate-child.guard';
import { AccountHome } from './components/account/account-home/account-home';
import { canDeactivateGuard } from './route-guards/can-deactivate.guard';

const routes: Routes = [
  { path: 'home', component: Home },
  {
    path: 'catalog',
    component: Catalog,
    canActivate: [canActivateGuard],
    data: { allow_annonymous: true }
  },
  {
    path: 'products', component: Product,
    canDeactivate: [canDeactivateGuard],
  },
  { path: 'products/:id', component: ProductDetails },
  { path: 'orders', component: Orders },
  {
    path: 'account', component: Account,
    canActivate: [canActivateGuard],
    canActivateChild: [canActivateChildGuard],
    data: { roles: [{ role: 'admin', privileges: ['view', 'edit', 'create', 'delete'] }], },
    children: [
      {
        path: 'home', component: AccountHome,
        data: { roles: [{ role: 'user', privileges: ['view'] }, { role: 'admin', privileges: ['view', 'edit', 'create', 'delete'] }], privileges: ['view,edit,create,delete'] },

      },
      {
        path: 'myorders', component: Orders,
        data: { roles: [{ role: 'user', privileges: ['view'] }, { role: 'admin', privileges: ['view', 'edit', 'create', 'delete'] }] },
        children: [
          { path: '', component: Orders },
          { path: ':id', component: OrderDetails },
        ]
      },
    ]
  },
  { path: 'notfound', component: Notfound },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
