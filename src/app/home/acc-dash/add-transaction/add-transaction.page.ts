import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController, LoadingController } from '@ionic/angular';
import { AccDashService } from '../acc-dash.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.page.html',
  styleUrls: ['./add-transaction.page.scss'],
})
export class AddTransactionPage implements OnInit {

  addTransaction: FormGroup;

  Categories: string[] = ['Income', 'Expense', 'Liabilities', 'Assets'];

  constructor(
    private modalCtrl: ModalController,
    private accdashService: AccDashService,
    private loadingCtrl: LoadingController,
    private route: Router
  ) { }

  ngOnInit() {
    this.addTransaction = new FormGroup({
      'tabledata': new FormGroup({
        'Date': new FormControl(),
        'Name': new FormControl(),
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
    this.route.navigate(['home', 'dashboard']);
  }

  onAddTransaction() {
    // this.accdashService.addTransaction(
    //   '06',
    //   this.addTransaction.value.tabledata.Name,
    //   this.addTransaction.value.tabledata.Date,
    //   this.addTransaction.value.tabledata.Type,
    //   this.addTransaction.value.tabledata.Category,
    //   this.addTransaction.value.tabledata.Amount,
    //   this.addTransaction.value.otherdata.Description,
    //   'abc'
    // );
    // this.modalCtrl.dismiss();
    // this.loadingCtrl.create({
    //   message: 'Transaction adding...'
    // }).then((loadingEl) => {
    //   loadingEl.present();
    //   return loadingEl.onDidDismiss();
    // });
  }

}
