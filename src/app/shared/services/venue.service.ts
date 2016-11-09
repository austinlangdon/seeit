import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { FoursquareApiService } from './foursquare-api.service';
import { SearchVenuesConfig } from '../models';
import { VenueDetailsConfig } from '../models';
import { Venue } from '../models';


@Injectable()
export class VenueService {
    
    private isLoading: boolean = false;
    
    constructor(
        private http: Http,
        private foursquareApiService: FoursquareApiService
     ) { }

     query(config: SearchVenuesConfig): Observable<Venue[]> {
        this.isLoading = true;
        let params: URLSearchParams = new URLSearchParams();
         
        Object.keys(config.parameters).forEach(key => {
                params.set(key, config.parameters[key]);
        });
        
        return this.foursquareApiService.get('/venues/search', params)
            .map(res => res.response.venues as Venue[])
            .catch(this.handleError);
     }

     get(config: VenueDetailsConfig): Observable<Venue> {
         let params: URLSearchParams = new URLSearchParams();
         
         Object.keys(config.parameters).forEach(key => {
             params.set(key, config.parameters[key]);
         });
         
         return this.foursquareApiService.get(`/venues/${config.venue_id}`, params)
            .map(res => console.log(res))
            .catch(this.handleError);
     }
     
     private handleError(error: any) {
         console.error('An error has occured: ', error);
         return Promise.reject(error.message || error);
     }
}