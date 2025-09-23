import { Pipe, PipeTransform } from '@angular/core';
import { IDataColumn } from '../common-grid/grid.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { StarratingPipe } from './starrating-pipe';

@Pipe({
  name: 'datagetter',
  standalone: false
})
export class DatagetterPipe implements PipeTransform {
  constructor(private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private starratingPipe: StarratingPipe) {

  }
  transform(rowData: any, columnInfo: IDataColumn): any {
    if (!columnInfo || !rowData) {
      return null;
    }
    let data = rowData[columnInfo.dataKey];

    if (columnInfo.dataType === 'date') {
      data = this.datePipe.transform(data, columnInfo.format);
    }
    else if (columnInfo.dataType === 'currency') {
      data = this.currencyPipe.transform(data, 'INR', 'symbol', columnInfo.format);
    }
    else if (columnInfo.dataType === 'rating') {
      data = this.starratingPipe.transform(data);
    }

    return data;
  }

}
