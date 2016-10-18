import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

import { Restaurant, User, RestaurantService, UserService } from '../shared';


@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [RestaurantService]
})
export class RestaurantComponent implements OnInit {

  restaurant: Restaurant;
  currentUser: User;
  canModify: boolean;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private location: Location,
    private http: Http,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: {restaurant: Restaurant}) => {
        this.restaurant = data.restaurant;
        console.log(data);
      });
      
    this.userService.currentUser
    .subscribe((userData: User) => {
      this.currentUser = userData
      this.canModify = (this.currentUser.username === this.restaurant.owner.username); 
    });
  }

}
