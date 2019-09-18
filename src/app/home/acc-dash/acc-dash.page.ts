import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Transactions } from './acc-dash.model';
import { AccDashService } from './acc-dash.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acc-dash',
  templateUrl: './acc-dash.page.html',
  styleUrls: ['./acc-dash.page.scss'],
})
export class AccDashPage implements OnInit {

  transactions: Transactions[];
  private transacSub: Subscription;
  total: number = 0;

  constructor(
    private modalCtrl: ModalController,
    private accdashService: AccDashService,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private route: Router
  ) {

  }

  ngOnInit() {
    this.transacSub = this.accdashService.transactions.subscribe(
      (Transactions) => {
        this.transactions = Transactions;
        let totalTransaction: number = 0;
        for (const key in Transactions) {
          if (Transactions.hasOwnProperty(key)) {
            totalTransaction = totalTransaction + Transactions[key].Amount;
          }
        }
        this.total = totalTransaction;
      }
    );
  }

  ionViewWillEnter() {
    this.accdashService.fetchTransactions().subscribe(
      resData => {
        console.log(resData);
      }
    );
  }

  addStatement() {
    this.route.navigate(['home', 'add']);
  }

  ngOnDestroy() {
    if (this.transacSub) {
      this.transacSub.unsubscribe();
    }
  }

}
