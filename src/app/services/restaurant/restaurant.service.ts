import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Restaurant } from '../../interfaces/restaurant';

@Injectable()
export class RestaurantService {
    
    private restaurantsUrl = 'app/restaurants';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getRestaurants(): Promise<Restaurant[]> {
        return this.http.get(this.restaurantsUrl).toPromise().then(res => { res.json().data as Restaurant[] }).catch(this.handleError);
    }

    getRestaurant(id: number): Promise<Restaurant> {
        return this.getRestaurants().then(restaurants => restaurants.find(restaurant => restaurant.id === id));
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