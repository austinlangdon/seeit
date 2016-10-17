import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service';

@Injectable()
export class ApiService {
    constructor(
        private http: Http,
        private jwt: JwtService
    ) {}

    
    // sets Content-Type and Accept headers to application/json
    // if jwt token exists, sets Authentication header to token
    private setHeaders(): Headers {
        let headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if(this.jwt.getToken()) {
            headersConfig['Authorization'] = `Token ${this.jwt.getToken()}`;
        }
        return new Headers(headersConfig);
    }

    // helper function to format any errors into JSON
    private formatErrors(error: any) {
        return Observable.throw(error.json());
    }

    // api service methods (get, put, post, & delete)
    get(url: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${url}`, { headers: this.setHeaders(), search: params })
        .catch(this.formatErrors)
        .map((res: Response) => res.json());
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            `${environment.api_url}${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders()}
        )
        .catch(this.formatErrors)
        .map((res: Response) => res.json() );
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${environment.api_url}${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders() }
        )
        .catch(this.formatErrors)
        .map((res: Response) => res.json() ); 
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${environment.api_url}${path}`, { headers: this.setHeaders() })
        .catch(this.formatErrors)
        .map((res: Response) => res.json() );
    }
}
