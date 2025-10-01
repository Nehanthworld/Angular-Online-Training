import { NgModule } from "@angular/core";
import { Product } from "./product";
import { SharedModule } from "../shared/shared-module";
import { CommonModule } from "@angular/common";
import { ProductFilters } from './product-filters/product-filters';
import { ProductDetails } from './product-details/product-details';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        Product,
        ProductFilters,
        ProductDetails,
    ],
    providers: [

    ],
    exports: [
        Product
    ]
})
export class ProductModule {

}