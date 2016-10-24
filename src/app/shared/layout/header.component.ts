import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models';
import { UserService } from '../services';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
        private router: Router,
        private userService: UserService
    ) {}

    ngOnInit() {
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