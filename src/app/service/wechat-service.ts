import {Injectable} from '@angular/core';
import {WebHttpClient} from './web.httpclient';

/**
 * 微信相关服务
 */
@Injectable({providedIn: 'root'})
export class WechatService {

  constructor(private http: WebHttpClient) {}

  // 获取分享ticket
  getJsapiTicket() {
    return this.http.get(`/wechat/ticket`, null);
  }

  // 获取openId
  getOpenIdByCode(code: any) {
    return this.http.get(`/wechat/openid`, {code: code});
  }

  // 获取已关注的用户信息
  getWechatUserInfo(openid: any) {
    return this.http.get(`/wechat/user`, {openid: openid});
  }


}
