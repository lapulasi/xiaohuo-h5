import { Component, OnInit } from '@angular/core';
import {TaskService} from '../service/task-service';
import {UserService} from '../service/user-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

  articleList = [];

  constructor(private taskService: TaskService, private userService: UserService) { }

  ngOnInit() {

    const userId = this.userService.getLoginUserId();
    this.taskService.listArticleByAuthor(userId).subscribe(data => {
      this.articleList = data;
    });
  }

}
