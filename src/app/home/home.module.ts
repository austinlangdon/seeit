import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { RestaurantSearchComponent } from '../restaurant-search/restaurant-search.component';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'home',
        component: HomeComponent,
        resolve: {
           isAuthenticated: HomeAuthResolver
        }
    }
]);

@NgModule({
    imports: [
        homeRouting,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        HomeComponent,
        RestaurantSearchComponent
    ],
    providers: [
        HomeAuthResolver
    ],
    exports: [HomeComponent]
})
export class HomeModule {}