import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController, LoadingController } from '@ionic/angular';
import { AccDashService } from '../acc-dash.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})

export class AddTransactionComponent implements OnInit {

  addTransaction: FormGroup;

  Categories: string[] = ['Income', 'Expense', 'Liabilities', 'Assets'];

  constructor(
    private modalCtrl: ModalController,
    private accdashService: AccDashService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.addTransaction = new FormGroup({
      'tabledata': new FormGroup({
        'Date': new FormControl(),
        'Type': new FormControl(),
        'Category': new FormControl(),
        'Amount': new FormControl(),
      }),
      'otherdata': new FormGroup({
        'Description': new FormControl()
      })
    });
  }

  ionViewWillEnter() {

  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onAddTransaction() {
    this.accdashService.addTransaction(
      '06',
      this.addTransaction.value.tabledata.Date,
      this.addTransaction.value.tabledata.Type,
      this.addTransaction.value.tabledata.Category,
      this.addTransaction.value.tabledata.Amount,
      this.addTransaction.value.otherdata.Description,
      'abc'
    );
    this.modalCtrl.dismiss();
    this.loadingCtrl.create({
      message: 'Transaction adding...'
    }).then((loadingEl) => {
      loadingEl.present();
      return loadingEl.onDidDismiss();
    });
  }


}
