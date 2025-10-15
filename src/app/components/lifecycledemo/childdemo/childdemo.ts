import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Specifications } from '../specifications/specifications';

@Component({
  selector: 'app-childdemo',
  standalone: false,
  templateUrl: './childdemo.html',
  styleUrl: './childdemo.css'
})
export class Childdemo implements OnInit,
  OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngOnDestroy(): void {
    console.log('Component unloaded or deleted from DOM');
  }
  ngAfterViewChecked(): void {
    console.log('View Updated', this.childCounter);
  }
  childCounter: number = 0;
  updateChildCounter() {
    this.childCounter++;
  }
  ngAfterViewInit(): void {
    console.log('view child', this.divelement);
    //this.divelement.nativeElement.style.backgroundColor = 'red';
  }
  @ViewChild('samplediv') divelement!: ElementRef


  ngAfterContentChecked(): void {
    //console.log('content child Updated', this.spec.specifications)
  }
  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    //console.log('content child init', this.spec.specifications)
  }
  @ContentChild(Specifications) spec!: Specifications;

  @Input() product: any = {};

  ngDoCheck(): void {
    //console.log('do check', this.product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('on changes', changes);
  }
}
