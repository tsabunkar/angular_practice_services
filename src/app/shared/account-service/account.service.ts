import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

    constructor() { }

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

    addAccount(name: string, status: string) {
        this.accountsArrray.push({
            name,
            status
        })
    }

    updateStatus(id: number, updateStatusVal: string) {
        this.accountsArrray[id].status = updateStatusVal
    }
}