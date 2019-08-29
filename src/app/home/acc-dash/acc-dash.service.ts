import { Injectable } from '@angular/core';
import { Transactions } from './acc-dash.model';
import { AuthService } from 'src/app/auth/auth.service';
import { BehaviorSubject, throwError } from 'rxjs';
import { take, map, delay, tap, switchMap } from 'rxjs/operators'
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

interface transactionData {
  Amount: number
  Category: string
  Date: Date
  Description: string
  Id: string
  Name: string
  Type: string
  UserId: string
}

@Injectable({
  providedIn: 'root'
})
export class AccDashService {

  private _transactions = new BehaviorSubject<Transactions[]>([]);

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private loadingCtrl: LoadingController
  ) { }

  get transactions() {
    return this._transactions.asObservable();
  }

  fetchTransactions() {
    return this.http.get<{ [keys: string]: transactionData }>('https://ionic-acc.firebaseio.com/transactions.json')
      .pipe(
        map((resData) => {
          console.log(resData);
          const transactions = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              transactions.push(
                new Transactions(
                  key,
                  resData[key].Name,
                  resData[key].Date,
                  resData[key].Type,
                  resData[key].Category,
                  resData[key].Amount,
                  resData[key].Description,
                  resData[key].UserId
                )
              );
            }
          }
          return transactions;
        }),
        tap((transactions) => {
          this._transactions.next(transactions);
        })
      );
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

  addTransaction(Id: string, Name: string, date: Date, Type: string, Category: string, Amount: number, Description: string, UserId: string) {

    let generatedId: string;
    let newTransaction: Transactions;

    this.authService.userId
      .pipe(
        take(1),
        switchMap(
          (userId) => {
            console.log(userId);
            if (!userId) {
              throw new Error('No user Id ');
            }
            newTransaction = new Transactions(
              Math.random().toString(),
              Name,
              date,
              Type,
              Category,
              Amount,
              Description,
              userId
            );
            return this.http.post<{ Name: string }>
              (
                'https://ionic-acc.firebaseio.com/transactions.json',
                { ...newTransaction, id: null }
              )
          }
        ), switchMap(
          (resData) => {
            console.log(resData);
            generatedId = resData.Name;
            return this.transactions;
          }
        ),
        take(1),
        tap(
          (transactions) => {
            console.log(transactions);
            newTransaction.Id = generatedId;
            this._transactions.next(
              transactions.concat(newTransaction)
            );
          })
      ).
      subscribe(
        (respData) => {
          console.log(respData);
          this.loadingCtrl.dismiss();
        }
      );

    // this.transactions
    //   .pipe(
    //     take(1),
    //     delay(5000)
    //   ).
    //   subscribe(
    //     (transactions) => {
    //       this._transactions.next(
    //         transactions.concat(newTransaction)
    //       );
    //       this.loadingCtrl.dismiss();
    //     }
    //   );
  }

}



// {
//   Id: '01',
//     Name: 'hari',
//       Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
//         Type: 'Paid',
//           Category: 'Expenses',
//             Amount: 1000,
//               Description: 'regxdgxdg',
//                 UserId: 'abc'
// },
// {
//   Id: '02',
//     Name: 'hari',
//       Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
//         Type: 'Paid',
//           Category: 'Expenses',
//             Amount: 1000,
//               Description: 'regxdgxdg',
//                 UserId: 'abc'
// },
// {
//   Id: '03',
//     Name: 'hari',
//       Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
//         Type: 'Paid',
//           Category: 'Expenses',
//             Amount: 1000,
//               Description: 'regxdgxdg',
//                 UserId: 'abc'
// },
// {
//   Id: '04',
//     Name: 'hari',
//       Date: new Date('Thu Aug 08 2019 00:00:00 GMT+0530 (India Standard Time)'),
//         Type: 'Paid',
//           Category: 'Expenses',
//             Amount: 1000,
//               Description: 'regxdgxdg',
//                 UserId: 'abc'
// }
