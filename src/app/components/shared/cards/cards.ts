import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICardColumn } from './card.model';

@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  @Input() data!: any[]
  @Input() columns!: ICardColumn;
  @Output() actionOutput = new EventEmitter();

  rowAction(actionName: any, rowData: any) {
    this.actionOutput.emit({ actionName: actionName, rowData: rowData });
  }
}
