import { NgModule } from "@angular/core";
import { Product } from "./product";
import { SharedModule } from "../shared/shared-module";
import { ProductFilters } from './product-filters/product-filters';
import { ProductDetails } from './product-details/product-details';
import { AppRoutingModule } from "../../app-routing-module";
import { Filters } from "../filters/filters";
import { Proddetailshome } from "../proddetailshome/proddetailshome";
import { Producthome } from "../producthome/producthome";
import { Catalog } from "./catalog/catalog";
import { ProductRoutingModule } from "./product-routing-module";

@NgModule({
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    declarations: [
        Product,
        ProductFilters,
        ProductDetails,
        Producthome,
        Proddetailshome,
        Filters,
        Catalog
    ],
    providers: [

    ],
    exports: [
        Product
    ]
})
export class ProductModule {

}