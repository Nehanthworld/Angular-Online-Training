import { NgModule } from "@angular/core";
import { Product } from "./product";
import { SharedModule } from "../shared/shared-module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        Product,
    ],
    providers: [

    ],
    exports: [
        Product
    ]
})
export class ProductModule {

}