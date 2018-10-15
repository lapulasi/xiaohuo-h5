import {Injectable} from '@angular/core';
import {WebHttpClient} from './web.httpclient';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TaskService {

  constructor(private http: WebHttpClient) {}

  uploadImg(formData: any): Observable<any> {
    return this.http.post(`/article/img/upload`, formData);
  }

  deleteImg(imageName: any): Observable<any> {
    return this.http.delete(`/article/img/delete/${imageName}`);
  }

  addArticle(type: any, authorId: any, title: any, content: any, images: any, budget: any): Observable<any> {
    return this.http.post(`/article/create`,
      {type: type, authorId: authorId, title: title, content: content, images: images, budget: budget});
  }

  shareArticle(articleId: any, userId: any): Observable<any> {
    return this.http.post('/article/share', {articleId: articleId, userId: userId});
  }

  viewArticle(articleId: any, shareUserId: any, viewWxUid: any) {
    return this.http.post('/article/view', {articleId: articleId, shareUserId: shareUserId, viewWxUid: viewWxUid});
  }

  getArticleDetail(articleId: any): Observable<any> {
    return this.http.get(`/article/detail/${articleId}`, null);
  }

  listArticle(type: any): Observable<any>  {
    return this.http.get(`/article/list/index`, {type: type});
  }

  listArticleByAuthor(authorId: any): Observable<any>  {
    return this.http.get(`/article/list/author/${authorId}`, null);
  }

  listArticleByShare(shareUserId: any): Observable<any>  {
    return this.http.get(`/article/list/share/${shareUserId}`, null);
  }

  getArticleNumByUserId(userId: any) {
    return this.http.get(`/article/user/num`, {userId: userId});
  }

  listShareUserOfArticle(articleId: any) {
    return this.http.get(`/article/list/share/user/${articleId}`, null);
  }

  getShareUserOfArticle(articleId: any, shareUserId: any) {
    return this.http.get(`/article/share/user/${articleId}/${shareUserId}`, null);
  }

  listArticleView(articleId: any, shareUserId: any) {
    return this.http.get(`/article/list/view/${articleId}/${shareUserId}`, null);
  }


  test() {
    return this.http.get('/article/test', null);
  }

}
