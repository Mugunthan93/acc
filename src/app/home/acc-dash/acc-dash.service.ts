import { Injectable } from '@angular/core';
import { Transaction } from './acc-dash.model';

@Injectable({
  providedIn: 'root'
})
export class AccDashService {

  _transaction: Transaction[] = [
    new Transaction(
      'Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)',
      'Paid', 'Expenses', 1000, 'dummy transaction'
    ),
    new Transaction(
      'Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)',
      'Paid', 'Expenses', 1000, 'dummy transaction'
    ),
    new Transaction(
      'Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)',
      'Paid', 'Expenses', 1000, 'dummy transaction'
    ),
    new Transaction(
      'Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)',
      'Paid', 'Expenses', 1000, 'dummy transaction'
    ),
    new Transaction(
      'Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)',
      'Paid', 'Expenses', 1000, 'dummy transaction'
    )
  ];

  constructor() { }

  get transaction() {
    return [...this._transaction];
  }


}
