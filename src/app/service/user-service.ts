import {Injectable} from '@angular/core';
import {WebHttpClient} from './web.httpclient';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: WebHttpClient) {}

  wechatUserLogin(code: any) {
    return this.http.get('/user/wechat/login', {code: code});
  }

  getUserInfo(userId: any) {
    return this.http.get(`/user/info/${userId}`, null);
  }

  setLoginFlag(val: any) {
    localStorage.setItem('uid', val);
  }

  getLoginUserId() {
    if (localStorage.getItem('uid')) {
      return Number(localStorage.getItem('uid'));
    }
    return null;
  }

}
