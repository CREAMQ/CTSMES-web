import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { NzMessageService, NzModalService, NzPlacementType } from 'ng-zorro-antd';

interface ItemData {
  id: number;
  plan_id: string;
  ship_name: string;
  voyage_id: string;
  remarks: string;
}

@Component({
  selector: 'app-preplan',
  templateUrl: './preplan.component.html',
  styleUrls: ['./preplan.component.less']
})
export class PreplanComponent implements OnInit {
  username: any;
  type: any;
  isVisible = false;
  data: ItemData[] = []
  theid :any 
  item: any = []
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfSelection = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  listOfData = [];
  listOfPosition: NzPlacementType[] = ['bottomRight'];
  path: string;
  bread: string;
  sn: string;
  vi: string;
  re: string;
  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private blogservice: BlogService,
    private message: NzMessageService,
    private modal: NzModalService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
      this.username = params['username']
      this.type = params['type']
    }) 
    this.path = location.pathname
    console.log(this.path)
    console.log('Button ok clicked!');
    const info = {
      "plan_id":"P2004122120"
    }
    this.blogservice.preplandata(info).subscribe(Result=>{
      if(Result.err_code == 17){
        this.listOfData = Result.data
        this.message.success('预配数据获取成功')
        this.isVisible = false;
        console.log(this.listOfData)
      }
      if(Result.err_code == 21){
        this.message.error('未知错误')
      }
    })
    this.sn = this.data[this.theid-1].ship_name
    this.vi = this.data[this.theid-1].voyage_id
    this.re = this.data[this.theid-1].remarks
    // setTimeout(() => {
    //   this.showModal()
    // }, 250); 
    // this.blogservice.getcurrentplan().subscribe(Result => {
    //   this.data = Result.data
    //   console.log(this.data)
    // })
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    const info = {
      "plan_id":"P2004122120"
    }
    this.blogservice.preplandata(info).subscribe(Result=>{
      if(Result.err_code == 17){
        this.listOfData = Result.data
        this.message.success('预配数据获取成功')
        this.isVisible = false;
        console.log(this.listOfData)
      }
      if(Result.err_code == 21){
        this.message.error('未知错误')
      }
    })
    this.sn = this.data[this.theid-1].ship_name
    this.vi = this.data[this.theid-1].voyage_id
    this.re = this.data[this.theid-1].remarks
    
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  check() {
    console.log("checkedChaneged")
    console.log(this.mapOfCheckedId)
    console.log(this.mapOfCheckedId[4])
    var num:number = 1; 
    var i:number; 
     
    for(i = num;i<=10;i++) {
       if(this.mapOfCheckedId[i] == true){
         this.theid = i
         break
       }
    }
  }
  choosevoyage(){
    this.showModal();
    this.blogservice.getcurrentplan().subscribe(Result => {
      this.data = Result.data
    })
  }
  TOSimport(){
    this.router.navigate(['shell/shipinfoimport'],{queryParams:{username:this.username,type:this.type}})
  }
  refresh(){
    location.reload()
  }
}
