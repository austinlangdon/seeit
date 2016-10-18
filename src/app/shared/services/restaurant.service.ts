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

    constructor(private http: Http, private apiService: ApiService) { }

    query(config: RestaurantListConfig): Observable<{restaurants: Restaurant[], restaurantCount: number}> {
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
        .map(data => data);
    }
    
    get(id: Number): Observable<Restaurant> {
        return this.apiService.get(`/restaurants/${id}`)
            .map(res => res.data)
            .catch(this.handleError);
    }

    destroy(slug) {
        return this.apiService.delete('/restaurants/' + slug);
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

    getRestaurants(): Observable<Restaurant[]> {        
        return this.http.get(this.restaurantsUrl)
        .map(res => res.json().data as Restaurant[])
        .catch(this.handleError);
    }

    getRestaurant(id: Number): Observable<Restaurant> {
        return this.getRestaurants()
        .map(restaurants => restaurants.find(restaurant => restaurant.id === id))
        .catch(this.handleError);
    }

    update(restaurant: Restaurant): Promise<Restaurant> {
        const url = `${this.restaurantsUrl}/${restaurant.id}`;
        return this.http
            .put(url, JSON.stringify(restaurant), { headers: this.headers })
            .toPromise()
            .then(() => restaurant)
            .catch(this.handleError);
    }

    create(name: string): Promise<Restaurant> {
        return this.http.post(this.restaurantsUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.restaurantsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occured: ', error);
        return Promise.reject(error.message || error);

    }
}