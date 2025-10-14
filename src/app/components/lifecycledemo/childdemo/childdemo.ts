import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childdemo',
  standalone: false,
  templateUrl: './childdemo.html',
  styleUrl: './childdemo.css'
})
export class Childdemo implements OnChanges, DoCheck {
  @Input() product: any = {};

  ngDoCheck(): void {
    console.log('do check', this.product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes',changes);
  }
}
