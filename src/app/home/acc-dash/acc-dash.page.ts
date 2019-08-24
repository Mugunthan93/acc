import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ModalController } from '@ionic/angular';
import { Transaction } from './acc-dash.model';
import { AccDashService } from './acc-dash.service';

@Component({
  selector: 'app-acc-dash',
  templateUrl: './acc-dash.page.html',
  styleUrls: ['./acc-dash.page.scss'],
})
export class AccDashPage implements OnInit {

  displayedColumns: string[] = ['Date', 'Type', 'Category', 'Amount'];
  dataSource: Transaction[];

  constructor(
    private modalCtrl: ModalController,
    private accdashService: AccDashService
  ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.dataSource = this.accdashService.transaction;
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
        this.dataSource = this.accdashService.transaction;
      }
    )
  }

}
