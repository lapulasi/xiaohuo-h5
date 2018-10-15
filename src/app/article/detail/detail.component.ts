import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task-service';
import {WechatConfig} from '../../util/wechat_config';
import {WechatService} from "../../service/wechat-service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user-service";
import {Location} from "@angular/common";
import {Title} from "@angular/platform-browser";

declare var Swiper: any;
declare var wx: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../../../assets/css/swiper/swiper.css']
})
export class DetailComponent implements OnInit {

  article = {};
  shared = false;
  shareId: any;
  code: any;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private userService: UserService,
    private wechatService: WechatService,
    private wechatConfig: WechatConfig) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.route.queryParams.subscribe(queryParams => {
        if (queryParams.shareId) {

          this.shared = true;
          this.shareId = queryParams.shareId;
          if (queryParams.code) {

            this.code = queryParams.code;
          } else {

            window.location.href = this.wechatConfig.encodeUrl('snsapi_base', 'article');
            return false;
          }
        } else {

          this.shareId = this.userService.getLoginUserId();
        }

        this.getArticleDetail(params.articleId);
      });
    });

    this.initSwiper();
  }

  getArticleDetail(id: any) {
    this.taskService.getArticleDetail(id).subscribe(data => {

      this.title.setTitle(data.article.title);

      this.article = data;
      // 微信分享配置
      this.wechatConfig.wechatArticleShare(this.shared, this.shareId, id, data.article.title, data.article.content.substring(0, 35).concat('……'), data.article.images[0]);

      // 记录查看信息
      if (this.code) {
        this.wechatService.getOpenIdByCode(this.code).subscribe(result => {
          const openid = result.resultData;
          this.taskService.viewArticle(id, this.shareId, openid).subscribe(rs => {
            console.log('view article');
          });
        });
      }

    });
  }

  initSwiper() {
    const swiper = new Swiper('.pics', {
      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: true
    });
  }
}
