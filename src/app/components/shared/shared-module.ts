import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { StarratingPipe } from './pipes/starrating-pipe';
import { DatagetterPipe } from './pipes/datagetter-pipe';
import { WishingpipePipe } from './pipes/wishingpipe-pipe';
import { CommonGrid } from './common-grid/common-grid';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatagetterPipe,
    StarratingPipe,
    WishingpipePipe,
    CommonGrid,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    StarratingPipe,
  ],
  exports: [
    DatagetterPipe,
    StarratingPipe,
    CommonGrid,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
