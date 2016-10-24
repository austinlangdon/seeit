import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './shared';
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
}
