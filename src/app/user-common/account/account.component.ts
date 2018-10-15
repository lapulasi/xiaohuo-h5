import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  accountLogs = [];
  userId = 1

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.queryAccountLog(this.userId).subscribe(data => {
      this.accountLogs = data;
    });
  }

  formatAmount(amount: number) {
    return (amount > 0) ? '+'+amount : amount;
  }

}
