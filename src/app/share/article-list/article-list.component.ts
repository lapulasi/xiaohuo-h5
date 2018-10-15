import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from '../../util/article-type';
import {Router} from '@angular/router';
import {UserService} from "../../service/user-service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  @Input() articleList: any;
  @Input() type: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {

  }

  getArticleTypeDes(val: any) {
    return ArticleType.getName(val);
  }

  gotoDetail(articleId: any) {
    if (this.type === 'index') {
      this.router.navigate(['/detail', articleId]);
    } else if (this.type === 'share') {
      this.router.navigate(['/share/detail', articleId]);
    } else if (this.type === 'view') {
      this.router.navigate(['/view/detail', articleId, this.userService.getLoginUserId()]);
    }

  }

}
