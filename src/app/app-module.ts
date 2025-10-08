import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Student } from './components/student/student';
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonGrid } from './components/shared/common-grid/common-grid';
import { Product } from './components/product/product';
import { Eventsdemo } from './components/eventsdemo/eventsdemo';
import { DatagetterPipe } from './components/shared/pipes/datagetter-pipe';
import { StarratingPipe } from './components/shared/pipes/starrating-pipe';
import { WishingpipePipe } from './components/shared/pipes/wishingpipe-pipe';
import { ProductService } from './components/product/product-service';
import { CookieService } from 'ngx-cookie-service';
import { ProductModule } from './components/product/product-module';
import { StudentModule } from './components/student/student-module';
import { Observablesdemo } from './components/observablesdemo/observablesdemo';
import { Notfound } from './components/notfound/notfound';
import { Home } from './components/home/home';
import { Producthome } from './components/producthome/producthome';
import { Proddetailshome } from './components/proddetailshome/proddetailshome';
import { Filters } from './components/filters/filters';
import { Orders } from './components/orders/orders';
import { Catalog } from './components/catalog/catalog';
import { Account } from './components/account/account';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AccountHome } from './components/account/account-home/account-home';
import { Address } from './components/account/address/address';

@NgModule({
  declarations: [
    App,
    Eventsdemo,
    Observablesdemo,
    Notfound,
    Home,
    Producthome,
    Proddetailshome,
    Filters,
    Orders,
    Catalog,
    Account,
    AccountHome,
    Address
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    StudentModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    CookieService
  ],
  bootstrap: [App]
})
export class AppModule { }
