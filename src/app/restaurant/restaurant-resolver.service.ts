import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Restaurant, RestaurantService, UserService } from '../shared';

@Injectable()
export class RestaurantResolver implements Resolve<Restaurant> {
    constructor(
        private router: Router,
        private restaurantService: RestaurantService,
        private userService: UserService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let id = Number(route.params['id']);
        return this.restaurantService.get(id);
    }
}