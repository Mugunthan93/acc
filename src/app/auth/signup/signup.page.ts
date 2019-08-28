import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signup: FormGroup;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private alertCtrl: AlertController
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
    this.loadingCtrl.create({
      message: 'Signing up...'
    }).then(
      (loadingEl) => {
        loadingEl.present();

        let obs: Observable<AuthResponseData>;
        obs = this.authService.signup(
          this.signup.value.email,
          this.signup.value.password
        )

        obs.subscribe(
          (resData) => {
            console.log(resData);
            loadingEl.dismiss();
            this.router.navigateByUrl('/home/user/dashboard');
          },
          (error) => {
            console.log(error);
            loadingEl.dismiss();
            this.alertCtrl.create(
              {
                header: 'Signup Failed',
                message: error.error.error.message,
                buttons: ['okay']
              }
            ).then(
              (alertEl) => {
                alertEl.present();
              }
            );
          }
        );
      }
    );
  }

}
