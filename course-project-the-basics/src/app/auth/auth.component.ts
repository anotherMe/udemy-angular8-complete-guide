import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private loginMode: boolean;

  constructor() { 
    this.loginMode = false;
  }

  ngOnInit() {
  }

  switchMode () {
    this.loginMode = !this.loginMode;
  }

  submitForm(form: NgForm) {
    console.log(form.value);
  }

}
