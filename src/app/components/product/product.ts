import { Component, computed, effect } from '@angular/core';
import { IGridColumn } from '../shared/common-grid/grid.model';
import { ProductModel } from './product.model';
import { productGridColums } from './product.model';
import { UpperCasePipe } from '@angular/common';
import { ProductService } from './product-service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  firstName: string = 'venkat';
  price: number = 10;
  price2?: number = 100;
  price3: string = '';
  totalPrice!: number;
  // totalPrice = computed(() =>
  //   this.productService.signalprice() * this.productService.signalquantity());
  
  constructor(private uppercasePipe: UpperCasePipe,
    private productService: ProductService,
  ) {
console.log(this.price)
    // this.price = 10;
    // this.price = undefined;
    effect(() => {
      this.price = this.productService.signalprice();
      //Get priceFilterd values from backend
      //API Call - price filter
      console.log('Price changed to:', this.productService.signalprice());
    })
    effect(() => {
      this.price = this.productService.signalquantity();
      console.log('Price changed to:', this.productService.signalquantity());
    })


    this.firstName = this.uppercasePipe.transform(this.firstName)
    this.productGridData = this.productService.products;
    productService.saveDataToSessionStorage();
    productService.saveDataToLocalStorage();
    productService.saveDataToCookies();
    console.log('Session Storage Data:', productService.getDataToSessionStorage());
    console.log('Local Storage Data:', productService.getDataToLocalStorage());
    console.log('Cookies Data:', productService.getDataToCookies());
  }
  date: Date = new Date();
  lastName: string = 'c';
  isAdmin: boolean = true;

  product: any = { id: 4, name: 'Monitor', price: 15000 };


  productGridColums: IGridColumn = productGridColums;
  productGridData!: ProductModel[];
  registerEffect() {

  }
  updatePrice() {
    //this.productService.signalprice.set(this.productService.signalprice() + 100);
    console.log(this.productService.signalprice());
  }
  handleAction(actionData: any) {
    if (actionData.actionName === 'edit') {
      //Edit logic
      console.log('Edit action triggered for:', actionData.rowData);
    }
    else if (actionData.actionName === 'delete') {
      //Delete logic
      console.log('Delete action triggered for:', actionData.rowData);
    }
  }
}
