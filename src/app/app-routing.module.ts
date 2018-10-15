import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {EditComponent} from "./article/edit/edit.component";
import {DetailComponent} from "./article/detail/detail.component";
import {CanActiveAuth} from "./util/active-auth";
import {ShareListComponent} from "./article/share-list/share-list.component";
import {ViewListComponent} from "./article/view-list/view-list.component";

const routes: Routes = [
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [CanActiveAuth],
    data: {title: '编辑文章'}
  },
  {
    path: 'detail/:articleId',
    component: DetailComponent,
    data: {title: '详情'}
  },
  {
    path: 'share/detail/:articleId',
    component: ShareListComponent,
    data: {title: '转发详情'}
  },
  {
    path: 'view/detail/:articleId/:shareUserId',
    component: ViewListComponent,
    data: {title: '点击详情'}
  },
  {
    path: 'common',
    canActivate: [CanActiveAuth],
    loadChildren: './user-common/user-common.module#UserCommonModule'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
      },
      {
        path: 'task',
        canActivate: [CanActiveAuth],
        loadChildren: './task/task.module#TaskModule'
      },
      {
        path: 'forward',
        canActivate: [CanActiveAuth],
        loadChildren: './forward/forward.module#ForwardModule'
      },
      {
        path: 'user',
        canActivate: [CanActiveAuth],
        loadChildren: './user/user.module#UserModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
