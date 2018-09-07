import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/account-service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  /*  accounts = [
     {
       name: 'Master Account',
       status: 'active'
     },
     {
       name: 'Testaccount',
       status: 'inactive'
     },
     {
       name: 'Hidden Account',
       status: 'unknown'
     }
   ];
 
   onAccountAdded(newAccount: {name: string, status: string}) {
     this.accounts.push(newAccount);
   }
 
   onStatusChanged(updateInfo: {id: number, newStatus: string}) {
     this.accounts[updateInfo.id].status = updateInfo.newStatus;
   } */

  //using Service here :-

  accounts: { name: string, status: string }[] = [];//declaring the accounts array with specific data-type

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.accounts = this.accountService.accountsArrray;
  }



}
