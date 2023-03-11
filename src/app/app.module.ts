import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
