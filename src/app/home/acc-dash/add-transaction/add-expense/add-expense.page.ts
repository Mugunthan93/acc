import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccDashService } from '../../acc-dash.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {

  addIncome: FormGroup;

  incomeType = ["active", "passive", "portfolio"];

  constructor(
    private accdashService: AccDashService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.addIncome = new FormGroup({
      'Date': new FormControl(null),
      'Type': new FormControl("active"),
      'Name': new FormControl(null),
      'Amount': new FormControl(null),
      'Description': new FormControl(null)
    });
  }

  onAddIncome() {
    console.log(this.addIncome.value);
    this.accdashService.addTransaction(
      this.addIncome.value.Name,
      this.addIncome.value.Date,
      this.addIncome.value.Type,
      "income",
      this.addIncome.value.Amount,
      this.addIncome.value.Description
    );
    this.loadingCtrl.create({
      message: 'Transaction adding...'
    }).then((loadingEl) => {
      loadingEl.present();
      return loadingEl.onDidDismiss();
    });
  }

}
