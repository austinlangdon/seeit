import './rxjs-extensions'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routing, appRoutingProviders } from './app.routing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data-service.service';
import { AppComponent } from './app.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

import { HomeModule } from './home/home.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AuthModule } from './auth/auth.module';

import 'hammerjs';
import { AuthComponent } from './auth/auth.component';

import {
  ApiService,
  AuthGuard,
  JwtService,
  SharedModule,
  UserService
} from './shared';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    [MaterialModule.forRoot()],
    routing,
    SharedModule,
    AuthModule,
    HomeModule,
    RestaurantModule
  ],
  declarations: [
    AppComponent,
    RestaurantDetailComponent
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
