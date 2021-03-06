import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Restaurant } from '../shared/models/restaurant.model';
import { RestaurantService } from '../shared';
import { RestaurantListConfig } from '../shared';

import { Venue } from '../shared';
import { VenueService } from '../shared';
import { SearchVenuesConfig } from '../shared';
import { GeolocationService } from '../shared';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css']
})
export class RestaurantSearchComponent implements OnInit {
  
  private listConfig: RestaurantListConfig;
  private searchTerms = new Subject<string>();
  restaurants: Observable<Restaurant[]>;
  

  // fs venues implementation
  private searchVenuesConfig: SearchVenuesConfig;
  private searchVenueTerms = new Subject<string>();
  private geoCordinates: string;
  venues: Observable<Restaurant[]>;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private geolocationService: GeolocationService,
    private venueService: VenueService
  ) { }

  search(term: any) {
    this.searchTerms.next(term);
  }

  searchVenue(term: any) {
    this.searchVenueTerms.next(term);
  }

  ngOnInit() {

    this.geolocationService.getCurrentPosition().map(position => {
      this.geoCordinates = `${position.coords.latitude},${position.coords.longitude}`;
    }).subscribe();

    // foursquare api venues implementation
    this.venues = this.searchVenueTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        if(term) {
          this.searchVenuesConfig = { 
            parameters: { 
              ll: this.geoCordinates, 
              query: term,
              limit: '10',
              client_id: 'AFCY3CCS1Q30G41CRKQKSR3VXOBRW3LHMEG2KOUA5ZHD3IQ4', 
              client_secret: 'D5OKRCVTFR2C5MT1T3WPVLITIF1AI3UB0TNM02FC43LR3NMS',
              v: '20161106'
            }
          };
          return this.venueService.query(this.searchVenuesConfig);
        } else {
          return Observable.of<Venue[]>([]);
        }
      })
      .catch(error => {
        console.log(error);
        return Observable.of<Venue[]>([]);
      });
  }

  gotoDetail(venue: Venue): void {
    let link = ['restaurant/', venue.id];
    this.router.navigate(link);
  }
}
