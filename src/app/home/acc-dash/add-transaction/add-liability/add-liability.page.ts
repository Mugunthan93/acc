import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AccDashService } from '../../acc-dash.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-liability',
  templateUrl: './add-liability.page.html',
  styleUrls: ['./add-liability.page.scss'],
})
export class AddLiabilityPage implements OnInit {

  addIncome: FormGroup;

  incomeType = ["Long-Term", "Short-term", "Others"];

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
