import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from '../shared/models/restaurant.model';
import { RestaurantService } from '../shared/services/restaurant.service';


@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [RestaurantService]
})
export class RestaurantComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.restaurant = this.route.data['restaurant'];
  }

}
