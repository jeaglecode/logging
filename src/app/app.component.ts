import {Component, OnInit} from '@angular/core';

// import { AuthService } from '@auth0/auth0-angular';
import { AuthService } from './auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService) {}


  ngOnInit() {
    this.authService.loginOnStartup();


    // this.loginWithRedirect()
  }

  // loginWithRedirect(): void {
  //   this.auth.loginWithRedirect();
  // }

  // logout(): void {
  //   this.auth.logout();
  //   // this.auth.logout(this.logoutOptions());
  // }

  // logoutOptions(): any {
  //   return { returnTo: window.location.origin };
  // }
}
