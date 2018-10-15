import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticleType} from "../../util/article-type";
import {TaskService} from "../../service/task-service";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html'
})
export class ArticleItemComponent implements OnInit, OnChanges {

  @Input() articleId: any;
  article: any;
  constructor(private taskService: TaskService) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.articleId) {
      this.taskService.getArticleDetail(this.articleId).subscribe(data => {
        this.article = data;
      });
    }

  }

  getArticleTypeDes(val: any) {
    return ArticleType.getName(val);
  }

}
