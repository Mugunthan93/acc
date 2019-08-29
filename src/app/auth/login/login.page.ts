import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: FormGroup;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private alertCtrl: AlertController

  ) { }

  ngOnInit() {
    this.login = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onLogin() {
    console.log(this.login.value);
    this.loadingCtrl.create({
      message: 'Logging up...'
    }).then(
      (loadingEl) => {
        loadingEl.present();

        let obs: Observable<AuthResponseData>;
        obs = this.authService.login(this.login.value.email, this.login.value.password)
        obs.subscribe(
          resData => {
            console.log(resData);
            loadingEl.dismiss();
            this.router.navigateByUrl('/home/user/dashboard');
          },
          error => {
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
