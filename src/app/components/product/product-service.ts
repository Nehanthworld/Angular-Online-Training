import { inject, Injectable, signal } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APIService } from '../../services/APIService';
import { of } from 'rxjs';

@Injectable()
export class ProductService {
  normalprice = 100;
  signalprice = signal(100);

  normalquantity = 100;
  signalquantity = signal(100);
  private apiService = inject(APIService);
  private cookieService = inject(CookieService);
  products = [
    { id: 1, imagePath: 'images/product/apple.jpeg', description: 'This is sample description about the product', name: 'Laptop', price: 85000.58239754, MFGDate: new Date(), userRating: 5 },
    { id: 2, imagePath: 'images/product/asus.jpeg', description: 'This is sample description about the product', name: 'Mobile', price: 25000, MFGDate: new Date(), userRating: 4.5 },
    { id: 3, imagePath: 'images/product/camera.jpeg', description: 'This is sample description about the product', name: 'Tablet', price: 30000, MFGDate: new Date(), userRating: 3.5 },
    { id: 4, imagePath: 'images/product/computer.jpeg', description: 'This is sample description about the product', name: 'Monitor', price: 15000, MFGDate: new Date(), userRating: 2.5 },
    { id: 5, imagePath: 'images/product/lenovo.jpeg', description: 'This is sample description about the product', name: 'Monitor', price: 15000, MFGDate: new Date(), userRating: 2.5 },
    { id: 6, imagePath: 'images/product/monitor.jpeg', description: 'This is sample description about the product', name: 'Monitor', price: 15000, MFGDate: new Date(), userRating: 2.5 },
    { id: 7, imagePath: 'images/product/shoes.jpeg', description: 'This is sample description about the product', name: 'Monitor', price: 15000, MFGDate: new Date(), userRating: 2.5 },
    { id: 8, imagePath: 'images/product/camera2.jpeg', description: 'This is sample description about the product', name: 'Monitor', price: 15000, MFGDate: new Date(), userRating: 2.5 },
    { id: 9, imagePath: 'images/product/shoes2.jpeg', description: 'This is sample description about the product', name: 'Monitor', price: 15000, MFGDate: new Date(), userRating: 2.5 },
    { id: 10, imagePath: 'images/product/shoes3.jpeg', description: 'This is sample description about the product', name: 'Monitor', price: 15000, MFGDate: new Date(), userRating: 2.5 },
  ];
  getProducts() {
    //DB logic
    //return of(this.products);
    return this.apiService.get();
  }
  getProductById(id: number) {
    let prod = this.products.filter(product => product.id === id);
    if (prod?.length > 0)
      return this.products.filter(product => product.id === id)[0];
    else
      return {};
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
