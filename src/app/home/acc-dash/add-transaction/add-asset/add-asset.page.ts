import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccDashService } from '../../acc-dash.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.page.html',
  styleUrls: ['./add-asset.page.scss'],
})
export class AddAssetPage implements OnInit {

  addIncome: FormGroup;

  incomeType = ["Convertable", "Non-Convertable", "Tangible", "Intagible", "Operating", "Non-Operating"];

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
