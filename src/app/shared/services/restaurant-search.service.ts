import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Restaurant } from '../models/restaurant.model';

@Injectable()
export class RestaurantSearchService {
    constructor(private http: Http) { }

    searchRestaurant(term: string): Observable<Restaurant[]> {
        return this.http
            .get(`app/restaurants/?name=${term}`)
            .map((r: Response) => r.json().data as Restaurant[]);
    }
}