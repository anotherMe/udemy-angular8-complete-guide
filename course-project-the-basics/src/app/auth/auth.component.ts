import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private loginMode: boolean;
  private isLoading: boolean;
  private error: string;

  constructor(private authService: AuthService, private router: Router) { 
    this.loginMode = false;
    this.isLoading = false;
    this.error = null;
  }

  ngOnInit() {
  }

  switchMode () {
    this.loginMode = !this.loginMode;
  }

  submitForm(form: NgForm) {

    if (!form.valid) {
      this.error = 'Some errors are present. Please correct them before submitting';
      return;
    }

    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;

    if (this.loginMode) {
      authObs = this.authService.signIn(form.value.email, form.value.password);
    } else {
      authObs = this.authService.signUp(form.value.email, form.value.password);
    }

    authObs.subscribe(response => {

      this.isLoading = false;
      this.error = null;
      this.router.navigate(['/recipes']);

    }, errorMessage => {

      this.isLoading = false;
      this.error = errorMessage;
    });

  }

}
