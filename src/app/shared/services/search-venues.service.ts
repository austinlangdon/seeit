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
        private apiService: FoursquareApiService
     ) { }

     query(config: SearchVenuesConfig): Observable<Restaurant[]> {
         let params: URLSearchParams = new URLSearchParams();
         
         

         this.isLoading = true;
         return this.apiService.get('/venues/search', params)
            .map(res => res.data as Restaurant[])
     }
}