import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Venue, VenueService, UserService, VenueDetailsConfig } from '../shared';

@Injectable()
export class RestaurantResolver implements Resolve<Venue> {
    constructor(
        private router: Router,
        private venueService: VenueService,
        private userService: UserService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let id = route.params['id'];
        
        let config: VenueDetailsConfig = {
            venue_id: id,
            parameters: {
                client_id: 'AFCY3CCS1Q30G41CRKQKSR3VXOBRW3LHMEG2KOUA5ZHD3IQ4',
                client_secret: 'D5OKRCVTFR2C5MT1T3WPVLITIF1AI3UB0TNM02FC43LR3NMS',
                v: '20161106'
            }
        }
        
        return this.venueService.get(config);
    }
}