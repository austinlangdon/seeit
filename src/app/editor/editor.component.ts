import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Restaurant, RestaurantService } from '../shared';

@Component({
    selector: 'editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
    
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private restaurantService: RestaurantService
    ) { }

    restaurant: Restaurant = new Restaurant();
    errors: Object = {};
    isSubmitting: boolean = false;

    ngOnSubmit() {
        this.route.data.subscribe(
            (data: {restaurant: Restaurant}) => {
                if(data.restaurant) {
                    this.restaurant = data.restaurant;
                }
            });
    }

    submit() {
        this.isSubmitting = true;

        this.restaurantService.save(this.restaurant).subscribe(
            (restaurant: Restaurant) => {
                this.router.navigateByUrl('/restaurant/' + restaurant.slug);
        }, (err) => {
            this.errors = err;
            this.isSubmitting = false;
        });
    }
}