import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private loginMode: boolean;
  private isLoading: boolean;
  private error: string;

  constructor(private authService: AuthService) { 
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

    this.isLoading = true;

    if (this.loginMode) {

      this.authService
      .signIn(form.value.email, form.value.password)
      .subscribe(response => {

        this.isLoading = false;
        this.error = null;
        console.log(response);

      }, errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      });

    } else {
      
      this.authService
      .signUp(form.value.email, form.value.password)
      .subscribe(response => {

        this.isLoading = false;
        this.error = null;
        console.log(response);

      }, errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      });
    }
  }

}
