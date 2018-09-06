import { Component, EventEmitter, Output } from '@angular/core';
import { MyLoggingService } from '../shared/logging-service/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [MyLoggingService] //providing the service at Component level
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private logginService: MyLoggingService) { }//In this way we inject the LoggingService in
  // this NewAccountComponent


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // console.log('A server status changed, new status: ' + accountStatus);

    // using our own custom service for logging in console
    this.logginService.logStatusChange(accountStatus);
  }
}
