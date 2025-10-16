import { afterEveryRender, afterNextRender, Component, computed, effect, OnInit } from '@angular/core';
import { IGridColumn } from '../shared/common-grid/grid.model';
import { ProductModel } from './product.model';
import { productGridColums } from './product.model';
import { UpperCasePipe } from '@angular/common';
import { ProductService } from './product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICanComponentDeactivate } from '../../route-guards/can-deactivate.guard';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements ICanComponentDeactivate, OnInit {
  oldname: string = 'venkat';
  firstName: string = 'venkat';
  price: number = 10;
  price2?: number = 100;
  price3: string = '';
  totalPrice!: number;
  realTimeData: any;
  // totalPrice = computed(() =>
  //   this.productService.signalprice() * this.productService.signalquantity());

  constructor(private uppercasePipe: UpperCasePipe,
    private productService: ProductService,
    private _router: Router,
    private _currentRoute: ActivatedRoute
  ) {
    afterNextRender(() => {
      console.log('after application render :: Product');
    })
    afterEveryRender(() => {
      console.log('after application updated :: Product');
    })
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


    //this.firstName = this.uppercasePipe.transform(this.firstName)
    this.productGridData = this.productService.products;
    productService.saveDataToSessionStorage();
    productService.saveDataToLocalStorage();
    productService.saveDataToCookies();
    console.log('Session Storage Data:', productService.getDataToSessionStorage());
    console.log('Local Storage Data:', productService.getDataToLocalStorage());
    console.log('Cookies Data:', productService.getDataToCookies());

    let productId = this._currentRoute.snapshot.queryParamMap.get('id');
    console.log('Product Id from Route:', productId);
    let productName = this._currentRoute.snapshot.queryParamMap.get('name');
    console.log('Product Name from Route:', productName);
    let fragment = this._currentRoute.snapshot.fragment;
    console.log('Fragment from Route:', fragment);
  }
  ngOnInit(): void {
    this.product = this.productService.getProducts().subscribe({
      next: (result: any) => {
        this.realTimeData = result;
      },
      error: (error: any) => {
        console.error(error);
      }
    })

  }
  canDeactivate(): boolean {
    return this.firstName !== this.oldname;
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
    else if (actionData.actionName === 'view') {
      //Delete logic
      this._router.navigate(['products', actionData.rowData.id, actionData.rowData.name],
        {
          queryParams: { name: '123' },
          queryParamsHandling: 'replace',
          fragment: 'testFragment2'
        }
      );//, 
      //{ queryParams: { name:actionData.rowData.name, userrating:actionData.rowData.userRating } });
    }
  }
}
