import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wishingpipe',
  standalone: false
})
export class WishingpipePipe implements PipeTransform {
  transform(value: string, style?: string): string {
    if (style === 'Indian') {
      return `Namaste ${value} - ${style}`;
    }
    else if (style === 'US') {
      return `Hello ${value} - ${style}`;
    }

    return `Hi ${value} - ${style}`;
  }
}
