import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycledemo',
  standalone: false,
  templateUrl: './lifecycledemo.html',
  styleUrl: './lifecycledemo.css'
})
export class Lifecycledemo {
  product: any = { productName: 'laptop', id: 1 };
  specifications: any = {
    ram: '4GB',
    ssd: '100GB',
    display: 'FHD'
  }
  counter: number = 1;
  updateProduct() {
    this.product.id = ++this.counter;
    this.specifications.ram = this.counter + 'GB'
  }
}
