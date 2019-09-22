import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.page.html',
  styleUrls: ['./add-transaction.page.scss'],
})
export class AddTransactionPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

  }

  onCancel() {
    this.route.navigate(['home', 'dashboard']);
  }

}
