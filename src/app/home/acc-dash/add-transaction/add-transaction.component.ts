import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
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
    private accdashService: AccDashService
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
    this.accdashService.addTransaction(this.addTransaction.value.tabledata);
    this.modalCtrl.dismiss();
    console.log(this.addTransaction);
  }


}
