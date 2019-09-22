import { Component, OnInit, OnDestroy } from '@angular/core';
import { Transaction } from './acc-dash.model';
import { AccDashService } from './acc-dash.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SortingComponent } from './sorting/sorting.component';

@Component({
  selector: 'app-acc-dash',
  templateUrl: './acc-dash.page.html',
  styleUrls: ['./acc-dash.page.scss'],
})
export class AccDashPage implements OnInit, OnDestroy {

  transactions: Transaction[];
  private transacSub: Subscription;
  total: number = 0;

  constructor(
    private accdashService: AccDashService,
    private route: Router,
    private popoverController: PopoverController
  ) {

  }

  ngOnInit() {
    this.transacSub = this.accdashService.transactions.subscribe(
      (Transactions) => {
        console.log(Transactions);
        this.transactions = Transactions;
        let totalTransaction: number = 0;
        for (const key in Transactions) {
          if (Transactions.hasOwnProperty(key)) {
            totalTransaction = totalTransaction + Transactions[key].Amount;
          }
        }
        this.total = totalTransaction;
      }
    );
  }

  ionViewWillEnter() {
    this.accdashService.fetchTransactions().subscribe(
      Transactions => {
        this.transactions = Transactions;
      }
    );
  }

  addStatement() {
    this.route.navigate(['home', 'add']);
  }

  onPopoverSorting() {
    this.popoverController.create({
      component: SortingComponent,
      translucent: true
    }).then(
      (popOverEl) => {
        popOverEl.present();
      }
    );
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnDestroy() {
    if (this.transacSub) {
      this.transacSub.unsubscribe();
    }
  }

}
