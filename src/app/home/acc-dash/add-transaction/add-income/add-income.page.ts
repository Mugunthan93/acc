import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {

  addIncome: FormGroup;

  incomeType = ["active", "passive", "portfolio"];

  constructor() { }

  ngOnInit() {
    this.addIncome = new FormGroup({
      'Date': new FormControl(null),
      'Type': new FormControl("active")
    });
  }

}
