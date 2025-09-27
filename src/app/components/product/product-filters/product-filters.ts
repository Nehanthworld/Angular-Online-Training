import { Component, inject } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-filters',
  standalone: false,
  templateUrl: './product-filters.html',
  styleUrl: './product-filters.css'
})
export class ProductFilters {
  private productService = inject(ProductService);

  updateFilters(){
    this.productService.signalprice.update((oldValue: any)=>{
      return 10000;
    });
  }
}
