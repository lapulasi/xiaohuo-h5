import weChatSign from 'wechat-sign';
import {Injectable} from '@angular/core';
import {WechatService} from '../service/wechat-service';
import {TaskService} from '../service/task-service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

declare var wx: any;

@Injectable({providedIn: 'root'})
export class WechatConfig {
  appid = environment.wechat_app_id;

  constructor(
    private router: Router,
    private wechatService: WechatService,
    private taskService: TaskService) {}


  /**
   * 文章分享
   * @param shared
   * @param articleId
   * @param url
   * @param title
   * @param desc
   * @param imgUrl
   */
  wechatArticleShare(shared: boolean, shareId: any, articleId: any, title: any, desc: any, imgUrl: any) {

    const url = this.getUrl();

    this.wechatService.getJsapiTicket().subscribe(data => {
      const ticket = data.resultData;

      this.wechatShareConfig(ticket, url);

      this.wechatShareReady(shared, shareId, articleId, url, title, desc, imgUrl);

      wx.error(function(error) {
        console.log('wechat fail:', error);
      });
    });

  }

  /**
   * 微信分享功能配置
   * @param url
   */
  wechatShareConfig(ticket: any, url: any) {
    const sign = weChatSign(ticket, url);

    wx.config({
      debug: false,
      appId: this.appid,
      timestamp: sign['timestamp'],
      nonceStr: sign['nonceStr'],
      signature: sign['signature'],
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 功能列表，我们要使用JS-SDK的什么功能
    });
  }

  /**
   * 微信分享内容配置
   * @param articleId
   * @param url
   * @param title
   * @param desc
   * @param imgUrl
   */
  wechatShareReady(shared: boolean, shareId: any, articleId: any, url: any, title: any, desc: any, imgUrl: any) {
    const that  = this;
    if (!shared) {
      url = `${url}?shareId=${shareId}`; // 第一次分享则拼接用户id
    }
    wx.ready(function() {
      wx.checkJsApi({
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success: function(res) {
        }
      });

      const shareData = {
        title: title, // 分享标题
        desc: desc,
        link: url,
        imgUrl: imgUrl, // 分享图标
        success: function() {
          console.log('share success');
          if (!shared) {
            that.taskService.shareArticle(articleId, shareId).subscribe();
          }
        }
      };

      wx.onMenuShareTimeline(shareData); // 分享到微信朋友圈
      wx.onMenuShareAppMessage(shareData); // 分享给微信好友
    });

  }

  /**
   * 签名
   * @param url
   * @returns {Promise<T>}
   */
  wechatSign(url) {
    return new Promise(resolve => {
      this.wechatService.getJsapiTicket().subscribe(data => {
        const sign = weChatSign(data.resultData, url);
        resolve(sign);
      });

    });
  }

  /**
   * 网页授权
   * @param url
   * @param scope snsapi_userinfo 弹窗授权   snsapi_base 静默授权
   * @returns {string}
   */
  encodeUrl(scope, state) {
    const url = this.getUrl();
     return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
  }

  getUrl() { // ios微信浏览器地址获取有bug故用此方式
    return `${window.location.origin}${this.router.routerState.snapshot.url}`;
  }


}
