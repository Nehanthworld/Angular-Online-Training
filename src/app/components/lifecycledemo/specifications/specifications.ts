import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specifications',
  standalone: false,
  templateUrl: './specifications.html',
  styleUrl: './specifications.css'
})
export class Specifications {
  @Input() specifications: any;
}
