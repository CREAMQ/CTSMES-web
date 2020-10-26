import { BlogService } from './../../service/blog.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  isShown: boolean;

  
  constructor(
    private fb: FormBuilder,
    private blogservice: BlogService,
    private message :NzMessageService,
    private router: Router

    ) { }
    updateConfirmValidator(): void {
      Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }
      // 确认密码
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      checkPassword: new FormControl('',[Validators.required, this.confirmationValidator]),
      usertel: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      type : new FormControl('',[Validators.required]),
      captcha: new FormControl('',[Validators.required]),
    });
    this.isShown = false
  }


    register(){
      const registerinfo={
        username : this.validateForm.value.username,
        pwd : this.validateForm.value.password,
        usertel : this.validateForm.value.usertel,
        email : this.validateForm.value.email,
        type : this.validateForm.value.type,
      }
      console.log("注册信息", registerinfo)
    this.blogservice.registery(registerinfo).subscribe(Result=>{
      if(Result.err_code == 201){
        this.message.error("该用户名已存在，不得重复！")
      }
      if(Result.err_code == 101){
        this.message.success("账号注册成功")
        this.router.navigateByUrl('login')
        
      }
    })
    }

  }



