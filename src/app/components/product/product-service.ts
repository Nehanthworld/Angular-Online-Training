import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cookieService = inject(CookieService);
  products = [
    { id: 1, name: 'Laptop', price: 85000.58239754, MFGDate: new Date(), userRating: 5 },
    { id: 2, name: 'Mobile', price: 25000, MFGDate: new Date(), userRating: 4.5 },
    { id: 3, name: 'Tablet', price: 30000, MFGDate: new Date(), userRating: 3.5 },
    { id: 4, name: 'Monitor', price: 15000, MFGDate: new Date(), userRating: 2.5 }
  ];
  getProducts() {
    //DB logic
    return this.products;
  }
  sendOrderConfirmation() {
    //Email logic
  }

  saveDataToSessionStorage() {
    sessionStorage.setItem('myData', JSON.stringify(this.products));
  }
  saveDataToLocalStorage() {
    localStorage.setItem('myData', JSON.stringify(this.products));
  }
  saveDataToCookies() {
    this.cookieService.set('myData', JSON.stringify(this.products), 7);
  }
  getDataToSessionStorage() {
    return sessionStorage.getItem('myData');
  }
  getDataToLocalStorage() {
    return localStorage.getItem('myData');
  }
  getDataToCookies() {
    return this.cookieService.get('myData');
  }
}
