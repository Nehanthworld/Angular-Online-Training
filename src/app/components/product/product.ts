import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  productGridColums = [
    { dataKey: 'id', header: 'Product Id' },
    { dataKey: 'name', header: 'Name' },
    { dataKey: 'price', header: 'Price' },
  ];

  productGridData = [
    { id: 1, name: 'Laptop', price: 85000 },
    { id: 2, name: 'Mobile', price: 25000 },
    { id: 3, name: 'Tablet', price: 30000 },
    { id: 4, name: 'Monitor', price: 15000 }
  ];
}
