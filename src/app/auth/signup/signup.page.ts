import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signup: FormGroup;

  constructor(
  ) { }

  ngOnInit() {
    this.signup = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'confirm_password': new FormControl(null)
    });
  }

  onSignup() {
    console.log(this.signup.value);
  }

}
