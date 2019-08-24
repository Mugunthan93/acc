import { Injectable } from '@angular/core';
import { Transaction, Transaction2 } from './acc-dash.model';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccDashService {

  private _transaction: Transaction[] = [
    {
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: '1000'
    },
    {
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: '1000'
    },
    {
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: '1000'
    },
    {
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: '1000'
    }
  ];

  private _transaction2: Transaction2[] = [
    {
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: '1000',
      Description: 'regxdgxdg',
      UserId: 'abc'
    },
    {
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: '1000',
      Description: 'regxdgxdg',
      UserId: 'abc'
    },
    {
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: '1000',
      Description: 'regxdgxdg',
      UserId: 'abc'
    },
    {
      Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
      Type: 'Paid',
      Category: 'Expenses',
      Amount: '1000',
      Description: 'regxdgxdg',
      UserId: 'abc'
    }
  ];

  constructor(
    private authService: AuthService
  ) { }

  get transaction() {
    return [...this._transaction];
  }

  addTransaction(transaction: Transaction) {
    this._transaction.push(transaction);
    console.log(this._transaction);
  }

  addTransaction2(Date: Date, Type: string, Category: string, Amount: string, Description: string, UserId: string) {
    const newTransaction = new Transaction2(Date, Type, Category, Amount, Description, this.authService.userId);
    this._transaction2.push(newTransaction);
  }

}
