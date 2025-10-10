import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  @Input()
  id!: string;
  @Input() name!: string;
  constructor(private _route: ActivatedRoute) {
    //this.productId = this._route.snapshot.paramMap.get('id')??'0';
  }
}
