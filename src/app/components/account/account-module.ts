

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from './account';
import { AccountHome } from './account-home/account-home';
import { RouterModule } from '@angular/router';
import { Address } from './address/address';
import { AccountRoutingModule } from './account-routing-module';

@NgModule({
    declarations: [
        Account,
        AccountHome,
        Address
    ],
    imports: [
        RouterModule,
        CommonModule,
        AccountRoutingModule
    ]
})
export class AccountModule { }
