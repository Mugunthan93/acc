import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ModalController, LoadingController } from '@ionic/angular';
import { Transactions } from './acc-dash.model';
import { AccDashService } from './acc-dash.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-acc-dash',
  templateUrl: './acc-dash.page.html',
  styleUrls: ['./acc-dash.page.scss'],
})
export class AccDashPage implements OnInit {

  displayedColumns: string[] = ['Date', 'Name', 'Type', 'Category', 'Amount'];
  dataSource: Transactions[];
  private transacSub: Subscription;

  constructor(
    private modalCtrl: ModalController,
    private accdashService: AccDashService,
    private loadingCtrl: LoadingController
  ) {

  }

  ngOnInit() {
    this.transacSub = this.accdashService.transactions.subscribe(
      (Transactions) => {
        this.dataSource = Transactions;
      }
    );
  }

  ionViewWillEnter() {
    this.accdashService.fetchTransactions().subscribe();
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
            this.dataSource = Transactions;
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
