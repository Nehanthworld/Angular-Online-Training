import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGridColumn } from './grid.model';

@Component({
  selector: 'app-common-grid',
  standalone: false,
  templateUrl: './common-grid.html',
  styleUrl: './common-grid.css'
})
export class CommonGrid {
  @Input() data!: any[]
  @Input() columns!: IGridColumn;

  @Output() actionOutput = new EventEmitter();

  rowAction(actionName: any, rowData: any) {
    this.actionOutput.emit({ actionName: actionName, rowData: rowData });
  }
}
