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

  constructor(private authService: AuthService) { 
    this.loginMode = false;
  }

  ngOnInit() {
  }

  switchMode () {
    this.loginMode = !this.loginMode;
  }

  submitForm(form: NgForm) {
    if (this.loginMode) {

      this.authService
      .signIn(form.value.email, form.value.password)
      .subscribe(response => {
        console.log(response)
      });

    } else {
      
      this.authService
      .signUp(form.value.email, form.value.password)
      .subscribe(response => {
        console.log(response)
      });
    }
  }

}
