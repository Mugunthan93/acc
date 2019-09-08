import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccDashService } from '../../acc-dash.service';

@Component({
  selector: 'app-add-liability',
  templateUrl: './add-liability.page.html',
  styleUrls: ['./add-liability.page.scss'],
})
export class AddLiabilityPage implements OnInit {

  addTransaction: FormGroup;

  constructor(
    private route: Router,
    private accdashService: AccDashService
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

  onCancel() {
    this.route.navigate(['/home/dashboard']);
  }

  onAddTransaction() {
    this.accdashService.addTransaction(
      '06',
      this.addTransaction.value.tabledata.Name,
      this.addTransaction.value.tabledata.Date,
      this.addTransaction.value.tabledata.Type,
      this.addTransaction.value.tabledata.Category,
      this.addTransaction.value.tabledata.Amount,
      this.addTransaction.value.otherdata.Description,
      'abc'
    );
    this.route.navigate(['/home/dashboard']);
  }

}
