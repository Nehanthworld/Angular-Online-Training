import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound } from './components/notfound/notfound';
import { Home } from './components/home/home';

const routes: Routes = [
  { path: 'home', component: Home },
  {
    path: 'account',
    loadChildren: () => import('./components/account/account-module').then(m => m.AccountModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./components/product/product-module').then(m => m.ProductModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./components/orders/orders-module').then(m => m.OrdersModule)
  },
  { path: 'notfound', component: Notfound },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
