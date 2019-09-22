import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Contacts, Contact } from '@ionic-native/contacts/ngx';
import { AccDashService } from '../../acc-dash.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {

  addIncome: FormGroup;

  myContacts: Contact[];

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
    this.loadingCtrl.create({
      message: 'Transaction adding...'
    }).then((loadingEl) => {
      loadingEl.present();
      this.accdashService.addTransaction(
        this.addIncome.value.Name,
        this.addIncome.value.Date,
        this.addIncome.value.Type,
        "income",
        this.addIncome.value.Amount,
        this.addIncome.value.Description
      );
    });
  }

}
