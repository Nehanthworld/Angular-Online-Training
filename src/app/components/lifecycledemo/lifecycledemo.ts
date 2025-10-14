import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycledemo',
  standalone: false,
  templateUrl: './lifecycledemo.html',
  styleUrl: './lifecycledemo.css'
})
export class Lifecycledemo {
  product: any = { productName: 'laptop', id: 1 };
  counter: number = 1;
  updateProduct() {
    this.product.id = ++this.counter;
  }
}
