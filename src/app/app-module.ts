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

@NgModule({
  declarations: [
    App,
    Eventsdemo,
    Observablesdemo
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
