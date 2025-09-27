import { NgModule } from "@angular/core";
import { Product } from "./product";
import { SharedModule } from "../shared/shared-module";
import { CommonModule } from "@angular/common";
import { ProductFilters } from './product-filters/product-filters';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        Product,
        ProductFilters,
    ],
    providers: [

    ],
    exports: [
        Product
    ]
})
export class ProductModule {

}