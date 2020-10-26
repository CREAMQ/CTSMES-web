import { userinfo } from './../userinfo/userinfo';
import { Result } from './../../../models/result';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

// interface ItemData {
//   userid: string;
//   username: string;
//   userage: number;
//   usersex: string;
//   usertel: string;
//   authorization: string;
// }

interface ItemData {
  id: string;
  userid: string;
  username: string;
  usertel: string;
  useremail: string;
  usertype: string;
}

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.less']
})
export class UsermanagementComponent implements OnInit {

  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];
  pagesize:number = 8;
  isVisible = false;
  isOkLoading = false;
  qqqusername: any;
  qqqpassword: any;
  qqqusertel: any;
  qqquseremail: any;
  qqqusertype: any;
  constructor(
    private blogservice: BlogService,
    private message: NzMessageService,
    private router: Router,
  ) { }


  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    // Object.assign(this.listOfData[index], this.editCache[id].data);
    const array = this.editCache[id].data
    const updateEditCache = {
      userid: this.editCache[id].data.userid,
      username: array.username,
      usertel: array.usertel,
      useremail: array.useremail,
      usertype: array.usertype,
    }
    this.blogservice.infoupdate(updateEditCache).subscribe(Result=>{
      if (Result.err_code==66){
        this.blogservice.userinfo().subscribe(Result => {
          this.listOfData = Result.data
          this.updateEditCache()
        })
        this.message.success('修改成功')

      }
      if(Result.err_code==44){
        this.message.success('发生错误，请重试')
      }
    })
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  showmodal(): void {
    this.isVisible = true;
  }


  handleOk(): void {
    this.isOkLoading = true;
    const registerinfo={
      username : this.qqqusername,
      pwd: this.qqqpassword,
      usertel : this.qqqusertel,
      email : this.qqquseremail,
      type : this.qqqusertype,
    }
    console.log("注册信息", registerinfo)
    this.blogservice.registery(registerinfo).subscribe(Result=>{
      if(Result.err_code == 201){
        this.message.error("该用户名已存在，不得重复！")
      }
      if(Result.err_code == 101){
        this.message.success("账号注册成功")
        
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
    this.blogservice.userinfo().subscribe(Result => {
      this.listOfData = Result.data
      this.updateEditCache()
    })


  }
}