import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starrating',
  standalone: false
})
export class StarratingPipe implements PipeTransform {

  transform(rating: number, maxStars: number = 5): string {
    if (rating === null || rating === undefined || isNaN(rating)) {
      return ''; // Handle invalid input
    }

    let stars = '';
    const fullStars = Math.floor(rating);//4,4.5,3.5
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="fa fa-star yellow-color"></i>';
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars += '<i class="fa fa-star-half-o yellow-color"></i>'
    }

    // Add empty stars to fill up to maxStars
    const emptyStars = maxStars - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="fa fa-star-o yellow-color"></i>';
    }
    return stars;
  }
}
