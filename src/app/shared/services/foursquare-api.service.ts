import { Injectable } from '@angular/core';

import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service';

@Injectable()
export class FoursquareApiService {
    constructor(
        private http: Http,
        private jwt: JwtService
    ) {}

    private apiUrl = 'https://api.foursquare.com/v2';

    // sets Content-Type and Accept headers to application/json
    // if jwt token exists, sets Authentication header to token
    private setHeaders(): Headers {
        let headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        return new Headers(headersConfig);
    }

    // helper function to format any errors into JSON
    private formatErrors(error: any) {
        return Observable.throw(error.json());
    }

    get(url: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        
        return this.http.get(`${this.apiUrl}${url}`, { search: params })
        .catch(this.formatErrors)
        .map((res: Response) => res.json());
    }
}
