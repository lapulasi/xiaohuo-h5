import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  userInfo: any;

  constructor(
    private userService: UserService) {}

  ngOnInit() {
    const userId = this.userService.getLoginUserId();
    this.userService.getUserInfo(userId).subscribe(data => {
      this.userInfo = data;
    });

  }

}
