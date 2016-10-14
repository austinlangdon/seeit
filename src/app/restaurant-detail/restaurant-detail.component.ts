import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from '../interfaces/restaurant';
import { RestaurantService } from '../services/restaurant/restaurant.service';


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
      this.restaurantService.getRestaurant(id).then(restaurant => this.restaurant = restaurant);
    } )
  }

}
