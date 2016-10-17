import { Component, OnInit } from '@angular/core';

import { UserService } from './shared';
import { ApiService, RestaurantService } from './shared';


import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  appTitle = 'Dishup';

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
    private apiService: ApiService
    ) {}
  
  ngOnInit() {
    this.userService.populate();
    this.restaurantService.get('ra-sushi').map(data => {
      console.log(data);
    });

  }
}
