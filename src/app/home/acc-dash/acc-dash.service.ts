import { Injectable } from '@angular/core';
import { Transactions } from './acc-dash.model';
import { AuthService } from 'src/app/auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, delay } from 'rxjs/operators'
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AccDashService {

  private _transactions = new BehaviorSubject<Transactions[]>([
    {
      Id: '01',
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: 1000,
      Description: 'regxdgxdg',
      UserId: 'abc'
    },
    {
      Id: '02',
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: 1000,
      Description: 'regxdgxdg',
      UserId: 'abc'
    },
    {
      Id: '03',
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: 1000,
      Description: 'regxdgxdg',
      UserId: 'abc'
    },
    {
      Id: '04',
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: 1000,
      Description: 'regxdgxdg',
      UserId: 'abc'
    }
  ]);

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController
  ) { }

  get transactions() {
    return this._transactions.asObservable();
  }

  getTransaction(id: string) {
    return this.transactions
      .pipe(
        take(1), map(
          (transactions) => {
            return {
              ...transactions.find(
                p => p.Id === id
              )
            }
          }
        )
      );
  }

  addTransaction(Id: string, date: Date, Type: string, Category: string, Amount: number, Description: string, UserId: string) {
    const newTransaction = new Transactions(Id, date, Type, Category, Amount, Description, this.authService.userId);
    this.transactions
      .pipe(
        take(1),
        delay(5000)
      ).
      subscribe(
        (transactions) => {
          this._transactions.next(
            transactions.concat(newTransaction)
          );
          this.loadingCtrl.dismiss();
        }
      );
  }

}
