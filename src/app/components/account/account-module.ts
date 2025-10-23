

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from './account';
import { AccountHome } from './account-home/account-home';
import { RouterModule } from '@angular/router';
import { Address } from './address/address';
import { AccountRoutingModule } from './account-routing-module';
import { Signup } from './signup/signup';
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared-module';

@NgModule({
    declarations: [
        Account,
        AccountHome,
        Address,
        Signup
    ],
    imports: [
    RouterModule,
    AccountRoutingModule,
    SharedModule
]
})
export class AccountModule { }
