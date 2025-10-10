import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateChildGuard } from '../../route-guards/can-activate-child.guard';
import { canActivateGuard } from '../../route-guards/can-activate.guard';
import { Orders } from '../orders/orders';
import { OrderDetails } from '../orders/order-details/order-details';
import { Account } from './account';
import { AccountHome } from './account-home/account-home';
import { dataResolver } from '../../route-guards/route-resolver';

const routes: Routes = [
  {
    path: '', component: Account,
    canActivate: [canActivateGuard],
    canActivateChild: [canActivateChildGuard],
    data: { roles: [{ role: 'admin', privileges: ['view', 'edit', 'create', 'delete'] }], },
    children: [
      {
        path: 'home', component: AccountHome,
        resolve: { sampledata: dataResolver },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
