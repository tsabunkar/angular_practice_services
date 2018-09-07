import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyLoggingService } from '../shared/logging-service/logging.service';
import { AccountService } from '../shared/account-service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [MyLoggingService, AccountService] //providing the service at Component level
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
    this.logginService.logStatusChange(status);
  }
}
