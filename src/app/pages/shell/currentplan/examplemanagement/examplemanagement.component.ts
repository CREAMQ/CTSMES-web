import { Result } from './../../../../models/result';
import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute, Data } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';

class TreeNodeInterface {
  id: string;
  key: string;
  parentId: string;
  keyName: string;
  expand: boolean;
  count: number;
  childKey?: TreeNodeInterface[];
}

@Component({
  selector: 'app-examplemanagement',
  templateUrl: './examplemanagement.component.html',
  styleUrls: ['./examplemanagement.component.less']
})
export class ExamplemanagementComponent implements OnInit {
  username: any;
  type: any;
  PID: any;
  uuid: any;
  value: any;
  isVisible = false;
  visible = false;
  tasks = []

  
    data = [
      {
        key: '1',
        status: "0",
        childTaskId: "6b6c4ca2-7d48-11ea-a314-acde48001122",
        ctnGroup:"NYC-40-HC-F-H",
        startTime: "2020-04-13 21:34",
        endTime: "2020-04-14 21:34",
        dh: "D",
        progress: "86.36",
      },
    ]
  constructor(
    private blogservice: BlogService,
    private message: NzMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('sss')
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
      this.username = params['username']
      this.type = params['type']
      this.PID = params['PID']
    }) 

    this.blogservice.getalltask().subscribe(Result=>{
        this.tasks = Result.data
        console.log(this.tasks)
    })
  }
  getTask(task) {
    console.log(task)
    task.expand = !task.expand;
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    const newtaskinfo = {
      para : this.value
    }
    this.blogservice.createtask(newtaskinfo).subscribe(Result =>{
      if(Result.err_code == 66){
        this.message.success('算例创建成功')
        this.blogservice.getalltask().subscribe(Result=>{
          this.tasks = Result.data
        
      })
      }
    }
    )

    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  opendrawer(): void {
    this.visible = true;
  }

  closedrawer(): void {
    this.visible = false;
  }

  hold(ss){
    this.router.navigate(['shell/plan/examplemanagement/hold'],{queryParams:{username:this.username,type:this.type,uuid:ss}})
  }

  deck(ss){
    this.router.navigate(['shell/plan/examplemanagement/deck'],{queryParams:{username:this.username,type:this.type,uuid:ss}})
  }
}
