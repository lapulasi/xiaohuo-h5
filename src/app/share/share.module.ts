import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleStatComponent } from './article-stat/article-stat.component';
import { ArticleItemComponent } from './article-item/article-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ArticleListComponent, ArticleStatComponent, ArticleItemComponent],
  declarations: [ArticleListComponent, ArticleStatComponent, ArticleItemComponent]
})
export class ShareModule { }
