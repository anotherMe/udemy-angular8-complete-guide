
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean;

  constructor() {
    this.loggedIn = false;
  }

  isAuthenticated() {

    const promise = new Promise (
      (resolve, reject) => {
        setTimeout( () => { resolve(this.loggedIn); }, 300 )
      }
    );

    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout () {
    this.loggedIn = false;
  }
}
