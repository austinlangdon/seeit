import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    },
    {
      name: 'My Account',
      description: '',
      icon: 'account_circle', 
      route: '/profile'
    }
  ];
  
}
