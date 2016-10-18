import './rxjs-extensions'
import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { routing, appRoutingProviders } from './app.routing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data-service.service';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { RestaurantModule } from './restaurant/restaurant.module';

import {
  ApiService,
  AuthGuard,
  JwtService,
  SharedModule,
  UserService
} from './shared';

@NgModule({
  imports: [
    // Angular 2 modules
    BrowserModule,
    [MaterialModule.forRoot()],

    // Dishup modules
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing,
    SharedModule,
    AuthModule,
    HomeModule,
    RestaurantModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders,
    ApiService,
    AuthGuard,
    JwtService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
