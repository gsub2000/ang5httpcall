import {Component} from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';
import { Account } from './account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl:'./app.component.html',
  styleUrl:['./app.component.css']
})
export class AppComponent {

  public accounts: any = [];
  public books: any = [];
  public movies: any = [];

  public email;

  public account: Account = {
    guid: '',
    email: '',
    merchant: '',
  };

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getAccounts();
    console.log("Vaidy 1");
    this.getBooksAndMovies();
  }

  getAccounts() {
    this._demoService.getAccounts().subscribe(
      // the first argument is a function which runs on success
      data => { this.accounts = <Account[]>data},

      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading accounts')
    );

  }

  getBooksAndMovies() {
    this._demoService.getBooksAndMovies().subscribe(
      data => {
        this.books = data[0]
        this.movies = data[1]
      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }

  createAccount(account) {
    account.email = account.email;
    account.merchant = account.merchant;
    account.guid = account.guid;
    let acc = {name: name};
    this._demoService.createAccount(account).subscribe(
       data => {
         // refresh the list
         this.getAccounts();
         return true;
       },
       error => {
         console.error("Error saving Account!");
         return Observable.throw(error);
       }
    );
  }

  updateFood(food) {
    this._demoService.updateFood(food).subscribe(
       data => {
         // refresh the list
         this.getAccounts();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

  deleteAccount(account) {
    if (confirm("Are you sure you want to delete " + account.email + "?")) {
      this._demoService.deleteAccount(account).subscribe(
         data => {
           // refresh the list
           this.getAccounts();
           return true;
         },
         error => {
           console.error("Error deleting food!");
           return Observable.throw(error);
         }
      );
    }
  }
}
