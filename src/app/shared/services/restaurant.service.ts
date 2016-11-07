import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Restaurant, RestaurantListConfig } from '../models';

@Injectable()
export class RestaurantService {
    
    private restaurantsUrl = 'api/restaurants';
    private headers = new Headers({'Content-Type': 'application/json'});
    private allRestaurantsConfig: RestaurantListConfig = { type: 'all', filters: {} };

    constructor(private http: Http, private apiService: ApiService) { }

    query(config: RestaurantListConfig): Observable<Restaurant[]> {
        let params: URLSearchParams = new URLSearchParams();

        Object.keys(config.filters)
        .forEach((key) => {
            params.set(key, config.filters[key]);
        });
        
        return this.apiService
        .get(
            '/restaurants' + ((config.type === 'feed') ? '/feed' : ''),
            params
        )
        .map(res => res.data as Restaurant[])
        .catch(this.handleError);
    }

    get(id: Number): Observable<Restaurant> {
        return this.query(this.allRestaurantsConfig)
        .map(restaurants => restaurants.find(restaurant => restaurant.id === id))
        .catch(this.handleError);
    }

    destroy(id: Number) {
        return this.apiService.delete('/restaurants/' + id);
    }

    save(restaurant): Observable<Restaurant> {
        if(restaurant.slug) {
            return this.apiService.put('/restaurants/' + restaurant.slug, {restaurant: restaurant})
            .map(data => data.restaurant);
        } else {
            return this.apiService.post('/restaurants', {restaurant: restaurant})
            .map(data => data.restaurant)
        }
    }

    private handleError(error: any) {
        console.error('An error occured: ', error);
        return Promise.reject(error.message || error);

    }
}