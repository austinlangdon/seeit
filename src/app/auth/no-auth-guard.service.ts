import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { UserService } from '../shared';

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // let url: string = state.url;

        return this.userService.isAuthenticated.take(1).map(bool => !bool);
    }
}