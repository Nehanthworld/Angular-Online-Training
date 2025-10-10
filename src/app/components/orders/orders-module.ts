import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orders } from './orders';
import { OrdersRoutingModule } from './orders-routing-module';
import { OrderDetails } from './order-details/order-details';

@NgModule({
    declarations: [
        Orders,
        OrderDetails
    ],
    imports: [
        CommonModule,
        OrdersRoutingModule
    ],
    exports: [
        Orders,
        OrderDetails
    ]
})
export class OrdersModule { }