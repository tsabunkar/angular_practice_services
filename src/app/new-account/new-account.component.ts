import { Component, EventEmitter, Output } from '@angular/core';
import { MyLoggingService } from '../shared/logging-service/logging.service';
import { AccountService } from '../shared/account-service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

  /*   providers: [MyLoggingService, AccountService]  *///providing the new instance of AccountService service
  // at child component thus this new service(AccountService) instance overrides the hirerachical service instance
  // which is inherited from Parent comp (AppComponent)

  /*   providers: [MyLoggingService] */
  //thus not providing the new service(AccountService) instance, instead using the 
  //AccountService instance directly in the constructor() which will be inherited from 
  //parent component (in the backsene)

  // MyLoggingService service -> is new service instance provided only in this child component
  // AccountService service  -> is service instance inherited from parent component (AppComponent)

})
export class NewAccountComponent {
  /*   @Output() accountAdded = new EventEmitter<{ name: string, status: string }>(); */

  constructor(private logginService: MyLoggingService, private accountService: AccountService) {
    //Event emitted by child1 compo (AccountComponent) is listened in this child2 compo 
    //thus COMMUNICATION B/W TWO SIBLINGS -via-> Services 
    this.accountService.mystatusUpdatedEvent.subscribe((statusVal: string) => {
      alert('New status value is ' + statusVal)
    })
  }//In this way we inject the LoggingService in
  // this NewAccountComponent


  /*   onCreateAccount(accountName: string, accountStatus: string) {
      this.accountAdded.emit({
        name: accountName,
        status: accountStatus
      }); 
  
      // console.log('A server status changed, new status: ' + accountStatus);

      // using our own custom service for logging in console
      this.logginService.logStatusChange(accountStatus);
    }
    */

  //Using cutom created service
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.logginService.logStatusChange(accountStatus);
  }



}
