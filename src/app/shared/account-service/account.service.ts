import { Injectable, EventEmitter } from '@angular/core';
import { MyLoggingService } from '../logging-service/logging.service';

@Injectable() //This meta-data(Annotation) tells angular that we can inject another (MyLoggingService)service
// instance into this AccountService service
export class AccountService {

    constructor(private loggingService: MyLoggingService) { }

    accountsArrray = [
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
    //We want an event which we can trigger in one child1 component and can listen in another child2 compon
    //i.e- using service for communication b/w child1 and child2 component, instead of communicating via
    //parent (child1 -> Parent, Parent -> child2)

    mystatusUpdatedEvent = new EventEmitter<string>();

    addAccount(name: string, status: string) {
        this.accountsArrray.push({
            name,
            status
        })
        this.loggingService.logStatusChange(status)
    }

    updateStatus(id: number, updateStatusVal: string) {
        this.accountsArrray[id].status = updateStatusVal
        this.loggingService.logStatusChange(updateStatusVal)
    }
}