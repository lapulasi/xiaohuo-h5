import { Component, OnInit } from '@angular/core';
import {TaskService} from '../service/task-service';
import {UserService} from '../service/user-service';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html'
})
export class ForwardComponent implements OnInit {

  articleList = [];

  constructor(private taskServie: TaskService, private userService: UserService) { }

  ngOnInit() {

    const userId = this.userService.getLoginUserId();
    this.taskServie.listArticleByShare(userId).subscribe(data => {
      this.articleList = data;
    });
  }

}
