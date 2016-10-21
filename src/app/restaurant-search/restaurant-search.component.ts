import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Restaurant } from '../shared/models/restaurant.model';
import { RestaurantService } from '../shared';
import { RestaurantListConfig } from '../shared';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css']
})
export class RestaurantSearchComponent implements OnInit {
  
  private listConfig: RestaurantListConfig;
  private searchTerms = new Subject<string>();
  restaurants: Observable<Restaurant[]>;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router 
  ) { }

  search(term: any) {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.restaurants = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        if(term) { 
          this.listConfig = { type: 'all', filters: { name: term } };
          return this.restaurantService.query(this.listConfig);
        } else { 
          return Observable.of<Restaurant[]>([]);
        }
      })
      .catch(error => {
        console.log(error);
        return Observable.of<Restaurant[]>([]);
      });
  }

  gotoDetail(restaurant: Restaurant): void {
    let link = ['restaurant/', restaurant.id];
    this.router.navigate(link);
  }
}
