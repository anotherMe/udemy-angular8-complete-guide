import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private as: AuthService) { }

  ngOnInit() {
  }

  onBtnLogin() {
    this.as.login();
    console.log('You are now logged in');
  }

  onBtnLogout() {
    this.as.logout();
    console.log('You just logged out');
  }

}
