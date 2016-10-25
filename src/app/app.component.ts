import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './shared';
import { User } from './shared';
import { ApiService, RestaurantService } from './shared';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isAuthenticated: boolean;
  appTitle = 'Dishup';
  currentUser: User;
    

    views: Object[] = [
        {
        name: 'Home',
        description: '',
        icon: 'home',
        route: '/home'
        },
        {
        name: 'Popular Dishes',
        description: '',
        icon: 'restaurant_menu',
        route: '/trending'
        },
        {
        name: 'My Favorites',
        description: '',
        icon: 'favorite', 
        route: '/favorites'
        }
    ];

  constructor(
    private userService: UserService,
    private restaurantService: RestaurantService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
    ) {}
  
  ngOnInit() {
    this.userService.populate();
    this.isAuthenticated  = this.route.data['isAuthenticated'];

    this.userService.currentUser.subscribe(user => {
            this.currentUser = user;
            console.log(user);  
        });
  }

  signOut() {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/home');
    }
}
