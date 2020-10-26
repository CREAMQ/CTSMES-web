import { Result } from './../../../models/result';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-currentplan',
  templateUrl: './currentplan.component.html',
  styleUrls: ['./currentplan.component.less']
})
export class CurrentplanComponent implements OnInit {
  selectedValue: any
  listOfData = [];
  listOfData2 = [];
  username: any;
  type: any;
  PID: any;
  constructor(
    private blogservice: BlogService,
    private message: NzMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
      this.username = params['username']
      this.type = params['type']
    }) 
    this.blogservice.getcurrentplan2().subscribe(Result=>{
      this.listOfData = Result.data
      console.log(this.listOfData)
    })
    this.blogservice.gethistoryplan().subscribe(Result=>{
      this.listOfData2 = Result.data
      console.log(this.listOfData2)
    })
  }
  click(planid){
    this.examplemanagement(planid);
  }
  examplemanagement(planid){
    this.router.navigate(['shell/plan/examplemanagement'],{queryParams:{username:this.username,type:this.type,PID:planid}})
  }
}
