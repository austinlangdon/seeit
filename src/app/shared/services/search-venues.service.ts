import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { FoursquareApiService } from './foursquare-api.service';
import { SearchVenuesConfig } from '../models';
import { Restaurant } from '../models';


@Injectable()
export class SearchVenuesService {
    
    private isLoading: boolean = false;
    
    constructor(
        private http: Http,
        private foursquareApiService: FoursquareApiService
     ) { }

     query(config: SearchVenuesConfig): Observable<Restaurant[]> {
         this.isLoading = true;
         let params: URLSearchParams = new URLSearchParams();
         
         Object.keys(config.parameters).forEach(key => {
             params.set(key, config.parameters[key]);
         });
         console.log('search-venues-service');
         return this.foursquareApiService.get('/venues/search', params)
            // .map(res => res.data as Restaurant[])
            .map(res => console.log(res))
            .catch(this.handleError);
     }
     
     private handleError(error: any) {
         console.error('An error has occured: ', error);
         return Promise.reject(error.message || error);
     }
}