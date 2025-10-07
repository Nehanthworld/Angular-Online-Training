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

const routes: Routes = [
  { path: 'home', component: Home },
  {
    path: 'catalog',
    component: Catalog,
    canActivate: [canActivateGuard],
    data: { allow_annonymous: true }
  },
  { path: 'products', component: Product },
  { path: 'products/:id', component: ProductDetails },
  { path: 'orders', component: Orders },
  {
    path: 'account', component: Account,
    canActivate: [canActivateGuard],
    data: { roles: ['admin'], privileges: ['view,edit,create,delete'] },
    children: [
      {
        path: '', component: Account,

      },
      {
        path: 'myorders', component: Orders,
        canActivateChild: [canActivateChildGuard],
        data: { roles: ['user'], privileges: ['view,edit,create,delete'] },
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
