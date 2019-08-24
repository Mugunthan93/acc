import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})

export class AddTransactionComponent implements OnInit {

  addTransaction: FormGroup;

  Categories: string[] = ['Income', 'Expense', 'Liabilities', 'Assets'];

  constructor() { }

  ngOnInit() {
    this.addTransaction = new FormGroup({
      'Date': new FormControl(),
      'Type': new FormControl(),
      'Category': new FormControl(),
      'Amount': new FormControl(),
      'Description': new FormControl()
    });
  }

  ionViewWillEnter() {

  }

  onCancel() {

  }

  onAddTransaction() {
    console.log(this.addTransaction);
  }


}
