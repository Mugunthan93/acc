import { Injectable } from '@angular/core';
import { Transactions } from './acc-dash.model';
import { AuthService } from 'src/app/auth/auth.service';
import { BehaviorSubject, throwError } from 'rxjs';
import { take, map, tap, switchMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

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
  userId: string;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private route: Router,
    private loadingCtrl: LoadingController
  ) { }

  get transactions() {
    return this._transactions.asObservable();
  }

  fetchTransactions() {
    return this.authService.userId
      .pipe(
        take(1),
        switchMap(
          (userId) => {
            if (!userId) {
              throw new Error('User not found');
            }
            return this.http.get<{ [keys: string]: transactionData }>(
              `https://ionic-acc.firebaseio.com/transactions.json?orderBy="UserId"&equalTo="${userId}"`
            )
          }),
        map((resData) => {
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
            console.log(transactions);
            return {
              ...transactions.find(
                p => p.Id === id
              )
            }
          }
        )
      );
  }

  addTransaction(Name: string, date: Date, Type: string, Category: string, Amount: number, Description: string) {

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
          this.route.navigate(['home', 'dashboard']);
        }
      );
  }

}
