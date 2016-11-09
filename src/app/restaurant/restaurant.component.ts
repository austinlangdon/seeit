import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

import { Venue, User, VenueService, UserService } from '../shared';


@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [VenueService]
})
export class RestaurantComponent implements OnInit {

  venue: Venue;
  currentUser: User;
  canModify: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: Http,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: {venue: Venue}) => {
        this.venue = data.venue;
      });
      
    // this.userService.currentUser
    // .subscribe((userData: User) => {
    //   this.currentUser = userData
    //   this.canModify = (this.currentUser.username === this.restaurant.owner.username); 
    // });
  }

}
