import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Restaurant } from '../shared/models/restaurant.model';
import { RestaurantSearchService } from '../shared/services/restaurant-search.service';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css'],
  providers: [RestaurantSearchService]
})
export class RestaurantSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  restaurants: Observable<Restaurant[]>;

  constructor(
    private restaurantSearchService: RestaurantSearchService,
    private router: Router 
  ) { }

  search(term: any) {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.restaurants = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.restaurantSearchService.searchRestaurant(term) : Observable.of<Restaurant[]>([]))
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
