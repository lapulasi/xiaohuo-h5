import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../../service/task-service';
import {Router} from '@angular/router';
import {ArticleType} from '../../util/article-type';
import {UserService} from '../../service/user-service';

declare var $: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  userId = 1;
  unit: any;
  type = {current: '', list: []};
  article = {budget: 0, title: '', content: '', imgs: []};

  @ViewChild('fileInput') fileInput;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private userService: UserService) {
    this.unit = 100;
    this.type = {list: ArticleType.list, current: ArticleType.list[0].value};
    this.article.budget = 1000;
  }

  ngOnInit() {
    this.userId = this.userService.getLoginUserId();
    this.initEvent();
  }

  uploadFile() {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('file', fileBrowser.files[0]);
      this.taskService.uploadImg(formData).subscribe((data) => {
        if (data.resultCode === 'SUCCESS') {
          this.article.imgs.push(data.resultData);
        }

        });
    }
  }

  deleteFile(imgName) {

    this.taskService.deleteImg(imgName).subscribe(data => {
      if (data.resultCode === 'SUCCESS') {
        this.removeImg(imgName);
      }
    });

  }

  removeImg(name) {
    for (let i = 0; i < this.article.imgs.length; i++) {
      const img = this.article.imgs[i];
      if (img.imageName === name ) {
        this.article.imgs.splice(i, 1);
      }
    }
  }

  initEvent() {
    if ($('.input-item').text() !== '') {
      $('.input-item').removeClass('empty');
    }

    $('.input-item').on('keyup', function() {
      $(this).removeClass('empty')
      if ($(this).text() === '') {
        $(this).addClass('empty');
      }
    });
  }

  createTask() {

    if (this.paramsVerify()) {
      const imgUrls = this.article.imgs.map(p => p.url + p.imageName);
      this.taskService.addArticle(this.type.current, this.userId, this.article.title, this.article.content, imgUrls, this.article.budget).subscribe(data => {
        if (data.resultCode === 'SUCCESS') {
          this.router.navigate(['/task']);
        }
      });
    }

  }

  paramsVerify() {
    if (!this.article.title) {
      alert('请输入标题！');
      return false;
    }
    if (!this.article.content) {
      alert('请输入内容！');
      return false;
    }
    if (this.article.budget <= 0) {
      alert('请输入预算！');
      return false;
    }
    return true;
  }


}
