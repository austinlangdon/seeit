import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Venue } from '../shared';
import { VenueService } from '../shared';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
  providers: [VenueService]
})
export class RestaurantDetailComponent implements OnInit {

  @Input()
  venue: Venue;

  constructor(
    private venueService: VenueService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      // this.venueService.get(id).map(venue => this.venue = venue);
    } )
  }

}
