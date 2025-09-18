import { Component, Input } from '@angular/core';
import { GridColumn } from './grid.model';

@Component({
  selector: 'app-common-grid',
  standalone: false,
  templateUrl: './common-grid.html',
  styleUrl: './common-grid.css'
})
export class CommonGrid {
  @Input() data!: any[]
  @Input() columns!: GridColumn[];
}
