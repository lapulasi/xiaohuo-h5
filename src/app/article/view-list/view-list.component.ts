import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../service/task-service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html'
})
export class ViewListComponent implements OnInit {

  articleId: any;
  shareUserId: any;
  viewList$: Observable;
  shareUserInfo: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params.articleId;
      this.shareUserId = params.shareUserId;
      this.viewList$ = this.taskService.listArticleView(this.articleId, this.shareUserId);
      this.taskService.getShareUserOfArticle(this.articleId, this.shareUserId).subscribe(data => {
        this.shareUserInfo = data;
      });

    });

  }

}
