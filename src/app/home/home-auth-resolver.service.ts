import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';

import { UserService } from '../shared';

import { Observable } from 'rxjs';

@Injectable()
export class HomeAuthResolver implements Resolve<boolean> {
    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.userService.isAuthenticated.take(1);
    }
}