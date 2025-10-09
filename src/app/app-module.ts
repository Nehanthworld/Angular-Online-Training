import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';
import { Notfound } from './components/notfound/notfound';
import { Home } from './components/home/home';


@NgModule({
  declarations: [
    App,
    //Eventsdemo,
    //Observablesdemo,
    Notfound,
    Home,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    CookieService
  ],
  bootstrap: [App]
})
export class AppModule { }
