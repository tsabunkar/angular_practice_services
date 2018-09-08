import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyLoggingService } from '../shared/logging-service/logging.service';
import { AccountService } from '../shared/account-service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

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
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();


  constructor(private logginService: MyLoggingService, private accountService: AccountService) { }

  /*   onSetTo(status: string) {
      this.statusChanged.emit({ id: this.id, newStatus: status });
      // console.log('A server status changed, new status: ' + status);
      this.logginService.logStatusChange(status);
    } */

  //Using cutom created service
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.logginService.logStatusChange(status);
    this.accountService.mystatusUpdatedEvent.emit(status);//In this child component we r emmitting an custome
    //event which will be listened by child2 compo (NewAccountComponent)
  }
}
