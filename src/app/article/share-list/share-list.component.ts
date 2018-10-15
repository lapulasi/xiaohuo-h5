import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../../service/task-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-share-list',
  templateUrl: './share-list.component.html'
})
export class ShareListComponent implements OnInit {

  articleId: any;
  shareList$: Observable;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params.articleId;
      this.shareList$ = this.taskService.listShareUserOfArticle(this.articleId);
    });

  }

}
