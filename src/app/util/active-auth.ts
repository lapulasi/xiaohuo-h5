import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../service/user-service';
import {WechatConfig} from './wechat_config';
import {map} from 'rxjs/internal/operators';
import {of} from 'rxjs/index';

@Injectable({providedIn: 'root'})
export class CanActiveAuth implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
    private wechatConfig: WechatConfig) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const openId = this.userService.getLoginUserId();
    if (openId) {
      return of<boolean>(true);
    }

    if (route.queryParams.code) {
      return this.userService.wechatUserLogin(route.queryParams.code).pipe(
        map(p => {
          if (p.resultCode === 'ERROR') {
            this.router.navigate(['/index']);
            return false;
          } else {
            this.userService.setLoginFlag(p.resultData.uid);
            if (p.resultData.des === 'toRegister') {
              // to register page
            }
            return true;
          }
        })
      );

    } else {

      window.location.href = this.wechatConfig.encodeUrl('snsapi_userinfo', 'authorize');
      return of<boolean>(false);
    }

  }


}
