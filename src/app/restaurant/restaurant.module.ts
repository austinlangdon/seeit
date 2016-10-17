import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { RestaurantComponent } from './restaurant.component';
import { RestaurantResolver } from './restaurant-resolver.service';

import { SharedModule } from '../shared';
import { RestaurantService } from '../shared';

const restaurantsRoutes: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'restaurant/:id',
        component: RestaurantComponent,
        resolve: {
            restaurant: RestaurantResolver
        }
    }
]);

@NgModule({
    imports: [
        restaurantsRoutes,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        RestaurantComponent
    ],
    providers: [
        RestaurantService,
        RestaurantResolver
    ],
    exports: [
        RestaurantComponent
    ]
})
export class RestaurantModule {}