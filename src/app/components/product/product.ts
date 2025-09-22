import { Component } from '@angular/core';
import { GridColumn } from '../shared/common-grid/grid.model';
import { ProductModel } from './product.model';
import { productGridColums } from './product.model';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  firstName: string = 'venkat';

  constructor(private uppercasePipe: UpperCasePipe) { 
    this.firstName = this.uppercasePipe.transform(this.firstName)
  }
  date: Date = new Date();
  lastName: string = 'c';
  isAdmin: boolean = true;

  product: any = { id: 4, name: 'Monitor', price: 15000 };


  productGridColums: GridColumn = productGridColums;
  productGridData: ProductModel[] = [
    { id: 1, name: 'Laptop', price: 85000.58239754},//, MFGDate, userRating },
    { id: 2, name: 'Mobile', price: 25000 },
    { id: 3, name: 'Tablet', price: 30000 },
    { id: 4, name: 'Monitor', price: 15000 }
  ];

  handleAction(actionData: any) {
    if (actionData.actionName === 'edit') {
      //Edit logic
      //TOBE replaced with DB logic
      this.productGridData = [
        { id: 1, name: 'Laptop1', price: 85000 },
        { id: 2, name: 'Mobile1', price: 25000 },
        { id: 3, name: 'Tablet1', price: 30000 },
        { id: 4, name: 'Monitor1', price: 15000 }
      ]
      console.log('Edit action triggered for:', actionData.rowData);
    }
    else if (actionData.actionName === 'delete') {
      //Delete logic
      console.log('Delete action triggered for:', actionData.rowData);
    }
  }
}
