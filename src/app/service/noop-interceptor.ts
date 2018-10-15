import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url: string = req.url;
    if (url.indexOf('http://') < 0) {
      req = req.clone({
        url: environment.service_url + req.url
      });
    }
    return next.handle(req);
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   let secureReq: HttpRequest<any> = req;
  //   const url = environment.service_url;   // 添加api统一前缀
  //   const params = req.params.append('t', new Date().getTime().toString());  // 请求中添加时间戳
  //   secureReq = req.clone({
  //     url: url + req.url,
  //     params: params
  //   });
  //   const started = Date.now();
  //   let ok: string;
  //   return next.handle(secureReq).pipe(
  //     tap(
  //       // Succeeds when there is a response; ignore other events
  //       event => {
  //         const response = event as HttpResponse<any>;
  //         ok = event instanceof HttpResponse ? 'succeeded' : '';
  //         if (response.body) {    // 请求的body直接拿到返回的数据，这时可判断错误码等信息。
  //           (event as any).body = response.body.data;
  //         }
  //       },
  //       error => {
  //         error.method = req.method;
  //         ok = 'failed';
  //       }
  //     ),
  //     finalize(() => {
  //       const elapsed = Date.now() - started;  // 可计算出请求所消耗时间
  //       const msg = `${req.method} '${req.urlWithParams}' ${ok} in ${elapsed} ms.`;
  //       console.log(msg);
  //     }));
  // }

}
