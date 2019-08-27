import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: FormGroup;

  constructor() { }

  ngOnInit() {
    this.login = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onLogin() {
    console.log(this.login.value);
  }

}
