import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../service/task-service";
import {UserService} from "../../service/user-service";

@Component({
  selector: 'app-article-stat',
  templateUrl: './article-stat.component.html'
})
export class ArticleStatComponent implements OnInit {

  articleStat: any;

  constructor(private taskService: TaskService, private userService: UserService) { }

  ngOnInit() {
    this.taskService.getArticleNumByUserId(this.userService.getLoginUserId()).subscribe(data => {
      this.articleStat = data;
    });

  }

}
