import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent {
  @Input('restaurants') restaurants: Restaurant[] | null = null;
  @ViewChild('list', { static: false }) listRef!: ElementRef;

  scroll(direction: number) {
    console.log('direction: ', direction);
    const container = this.listRef.nativeElement;
    container.scrollLeft += direction * container.offsetWidth;
  }
}
