import { Result } from './../../../models/result';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { NzMessageService } from 'ng-zorro-antd';

import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';




@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.less']
})
export class UserinfoComponent implements OnInit {
  auth: any;
  username: any;
  useridd:any;
  public list: object = {};
  public conditionlist: object = {}
  public listOfCondition: any = []
  public listOfTem: any = []
  public listOfPosition: any = []
  public listOfDate: any = []
  pageSize = 4;
  loading = true;
  isVisible = false;
  isOkLoading = false;
  validateForm: FormGroup;
  confirmationValidator: ValidatorFn;

  new_username:any;
  new_userage:any;
  new_usersex:any;
  new_usertel:any;
  new_useremail:any;
  usert: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogservice: BlogService,
    private message: NzMessageService,
  ) { }


  showModal(): void {
    this.isVisible = true;
   

  }

  handleOk(): void {
    this.isOkLoading = true;
    const updinfo ={
      userid: this.useridd,
      username: this.new_username,
      usertel: this.new_usertel,
      useremail: this.new_useremail,
      usertype: this.usert
    }
    console.log(updinfo)
    this.blogservice.infoupdate(updinfo).subscribe(Result=>{
      if (Result.err_code==66){
        this.message.success('修改成功')
      }
      if(Result.err_code==44){
        this.message.success('发生错误，请重试')
      }
    })
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    },1000);
    location.reload()
  }

  handleCancel(): void {
    this.isVisible = false;
  }



  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.username = params['username']
      this.auth = params['auth']
      console.log(this.username)
    })
    this.loading = true;
    const userinformation = {
      username: this.username
    }
    this.blogservice.getuser(userinformation).subscribe(Result => {
      if (Result.err_code == 99) {
        this.list = {
          userid: Result.data.userid,
          usertel: Result.data.usertel,
          useremail: Result.data.useremail,
          usertype: Result.data.usertype,
          regtime: Result.data.regtime,
        }
        this.useridd = Result.data.userid
        this.new_username = this.username
        this.new_useremail = Result.data.useremail
        this.new_usertel = Result.data.usertel
        this.usert = Result.data.usertype
      }
      if (Result.err_code == 400) {
        this.message.error("该用户不存在，请先注册")
      }
    })

  }
  xiugaimima(){
    
  }
}
