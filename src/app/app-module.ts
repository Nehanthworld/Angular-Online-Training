import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';
import { Notfound } from './components/notfound/notfound';
import { Home } from './components/home/home';
import { Lifecycledemo } from './components/lifecycledemo/lifecycledemo';
import { Childdemo } from './components/lifecycledemo/childdemo/childdemo';
import { Specifications } from './components/lifecycledemo/specifications/specifications';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APIService } from './services/APIService';


@NgModule({
  declarations: [
    App,
    //Eventsdemo,
    //Observablesdemo,
    Notfound,
    Home,
    Lifecycledemo,
    Childdemo,
    Specifications,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    //HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    CookieService,
  ],
  bootstrap: [App]
})
export class AppModule { }
