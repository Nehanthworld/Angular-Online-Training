import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../product-service';

@Component({
  selector: 'app-product-update',
  standalone: false,
  templateUrl: './product-update.html',
  styleUrl: './product-update.css'
})
export class ProductUpdate implements OnInit{
  @Input()
  id!: string;
  productDetails: any;
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productDetails = this.productService.getProductById(Number(this.id));
  }
}
