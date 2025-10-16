import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound } from './components/notfound/notfound';
import { Home } from './components/home/home';
import { canMatchGuard } from './route-guards/can-match.guard';

const routes: Routes = [
  { path: 'home', component: Home },
  {
    path: 'account',
    loadChildren: () => import('./components/account/account-module').then(m => m.AccountModule)
  },
  {
    path: '',
    //outlet: 'second',
    canMatch:[canMatchGuard],
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
  imports: [RouterModule.forRoot(routes,{useHash:true, bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
