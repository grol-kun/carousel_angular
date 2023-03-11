import { Component, Input } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {
  @Input('restaurant') restaurant: Restaurant | null = null;
}
