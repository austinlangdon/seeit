import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdMenuTrigger } from '@angular/material';

import { UserService } from './shared';
import { ApiService, RestaurantService } from './shared';


import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  title = 'app works!';
  appTitle = 'Dishup';
  isAuthenticated: boolean;
  

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
  }

  myAccount() {
    if(this.isAuthenticated) {
      this.trigger.openMenu();
    } else {
      this.router.navigateByUrl('login');
    } 
  }
}
