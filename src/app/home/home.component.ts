import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isAuthenticated = this.route.data['isAuthenticated'];

    if(this.isAuthenticated) {
      // TODO: show authenticated menues
      return;
    }   else {
      // TODO: don't show authenticated menues
      return;
    }
  }
}
