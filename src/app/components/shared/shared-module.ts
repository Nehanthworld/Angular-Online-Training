import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { StarratingPipe } from './pipes/starrating-pipe';
import { DatagetterPipe } from './pipes/datagetter-pipe';
import { WishingpipePipe } from './pipes/wishingpipe-pipe';
import { CommonGrid } from './common-grid/common-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cards } from './cards/cards';



@NgModule({
  declarations: [
    DatagetterPipe,
    StarratingPipe,
    WishingpipePipe,
    CommonGrid,
    Cards,
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
    Cards,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
