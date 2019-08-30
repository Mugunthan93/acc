import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ModalController, LoadingController } from '@ionic/angular';
import { Transactions } from './acc-dash.model';
import { AccDashService } from './acc-dash.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-acc-dash',
  templateUrl: './acc-dash.page.html',
  styleUrls: ['./acc-dash.page.scss'],
})
export class AccDashPage implements OnInit {

  displayedColumns: string[] = ['Date', 'Name', 'Type', 'Category', 'Amount'];
  transactions: Transactions[];
  private transacSub: Subscription;

  constructor(
    private modalCtrl: ModalController,
    private accdashService: AccDashService,
    private loadingCtrl: LoadingController,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.transacSub = this.accdashService.transactions.subscribe(
      (Transactions) => {
        this.transactions = Transactions;
      }
    );
  }

  ionViewWillEnter() {
    this.accdashService.fetchTransactions().subscribe(
      (resData) => console.log(resData)
    );
  }

  addStatement() {
    this.modalCtrl.create({
      component: AddTransactionComponent
    }).then(
      transacPage => {
        transacPage.present();
        return transacPage.onDidDismiss();
      }
    ).then(
      pageResponse => {
        this.transacSub = this.accdashService.transactions.subscribe(
          (Transactions) => {
            this.transactions = Transactions;
          }
        );
      }
    )
  }

  onEdit() {

  }

  ngOnDestroy() {
    if (this.transacSub) {
      this.transacSub.unsubscribe();
    }
  }

}
