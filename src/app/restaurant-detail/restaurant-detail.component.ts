import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from '../shared/models/restaurant.model';
import { RestaurantService } from '../shared/services/restaurant.service';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
  providers: [RestaurantService]
})
export class RestaurantDetailComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.restaurantService.getRestaurant(id).map(restaurant => this.restaurant = restaurant);
    } )
  }

}
