import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/task-service';
import {ArticleType} from '../util/article-type';

declare var Swiper: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  typeList = ArticleType.list;
  isSearch: Boolean = false;
  searchText: any;
  tab = {
    current: {name: '最新发布', value: 'new', list: 'newList'},
    list: [
      {name: '热门推荐', value: 'hot', list: 'hotList'},
      {name: '最新发布', value: 'new', list: 'newList'},
      {name: '奖励最多', value: 'award', list: 'awardList'}]
  };
  articleList = [];

  hotList = [];
  newList = [];
  awardList = [];

  constructor(
    private taskService: TaskService) {
  }

  ngOnInit() {
    this.initSwiper();
    this.listArticle();
  }

  listArticle() {
    if (this[this.tab.current.list].length > 0) {
      this.articleList = this[this.tab.current.list];
    } else {
      this.taskService.listArticle(this.tab.current.value).subscribe(data => {
        this[this.tab.current.list] = data;
        this.articleList = this[this.tab.current.list];
      });
    }


  }


  initSwiper() {
    const swiper = new Swiper('.poster', {
      pagination: {
        el: '.swiper-pagination'
      }
    });
    const swiper1 = new Swiper('.enter', {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true
    });
  }

}
