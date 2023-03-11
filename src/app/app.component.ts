import { Component } from '@angular/core';
import { Restaurant } from './interfaces/restaurant';
import { DataService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public restaurants: Restaurant[] | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.restaurants = data;
    });
  }
}
