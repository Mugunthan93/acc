import { Component, OnInit } from '@angular/core';
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

  displayedColumns: string[] = ['Date', 'Type', 'Category', 'Amount', 'Description'];
  dataSource: Transaction[];

  constructor(
    private modalCtrl: ModalController,
    private accdashService: AccDashService
  ) {
    this.dataSource = this.accdashService.transaction;
    console.log(this.dataSource);
  }

  ngOnInit() {
  }

  addStatement() {
    this.modalCtrl.create({
      component: AddTransactionComponent
    }).then(
      transacPage => {
        transacPage.present();
      }
    )
  }

}
