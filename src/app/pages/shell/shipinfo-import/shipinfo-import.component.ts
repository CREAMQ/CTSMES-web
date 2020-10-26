import { Result } from './../../../models/result';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { NzMessageService, NzModalRef, NzModalService } from 'ng-zorro-antd';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-shipinfo-import',
  templateUrl: './shipinfo-import.component.html',
  styleUrls: ['./shipinfo-import.component.less']
})
export class ShipinfoImportComponent implements OnInit {
  selectedvoyageid = '全部';
  selectedShipname = '全部';
  company = [];
  equipment = [];
  TOSdata = [];
  displayData = [ ...this.TOSdata ];
  sortName = null;
  sortValue = null;
  listOfData = []
  listOfVoyageid = []
  listOfShipname = []
  a = {}
  confirmModal: NzModalRef; // For testing by now
  username: any;
  type: any;
  constructor(
    private blogservice: BlogService,
    private message: NzMessageService,
    private modal: NzModalService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
      this.username = params['username']
      this.type = params['type']
    }) 
    this.getvoyageidlist();
    this.getshipnamelist();
    this.blogservice.getall().subscribe(Result=>{
      this.displayData = Result.data
    })
  }



  getvoyageidlist(): void {
  this.blogservice.getvoyageidlist().subscribe(Result=>{
    this.listOfVoyageid = Result.data
    console.log('this.listOfVoyageid:',this.listOfVoyageid)
    this.listOfVoyageid.unshift({listOfVoyageid:'全部'})
  })

  }
  getshipnamelist(): void {
    this.blogservice.getshipnamelist().subscribe(Result=>{
      this.listOfShipname = Result.data
      console.log('this.listOfShipname:',this.listOfShipname)
      this.listOfShipname.unshift({listOfShipname:'全部'})
    })
    }

  reset(): void {
    this.selectedvoyageid = '全部';
    this.selectedShipname = '全部';
    // this.getshipname(this.selectedShipname);
    // this.getvoyageid(this.selectedvoyageid);
    this.blogservice.getall().subscribe(Result=>{
      this.displayData = Result.data
    })
  }

  getshipname(selectedShipname): void {
    const info = {
      "ship_name":selectedShipname
    }
    this.blogservice.getshipname(info).subscribe(Result=>{
      if(Result.err_code == 11){
        this.a = Result.data
        this.TOSdata = [this.a]
      this.displayData = [ ...this.TOSdata ];
      console.log("TOSdata:",this.TOSdata)
      console.log("displayData:",this.displayData)
      }
      if(Result.err_code == 15){
        this.displayData = []
      }
    })
  }

  getvoyageid(selectedvoyageid): void {
    const info = {
      "voyage_id":selectedvoyageid
    }
    this.blogservice.getvoyageid(info).subscribe(Result=>{
      if(Result.err_code == 10){
        this.a = Result.data
        this.TOSdata = [this.a]
      this.displayData = [ ...this.TOSdata ];
      console.log("TOSdata:",this.TOSdata)
      console.log("displayData:",this.displayData)
      }
      if(Result.err_code == 14){
        this.displayData = []
      }
    })
  }

  import(){
    let string1:string = '航次：'
    let string2:string = this.displayData[0].voyage_id
    let string3:string = this.displayData[0].ship_name
    let string4:string = '船名：'
    let string5 = `${string1}${string2} ${string4}${string3}`
    this.confirmModal = this.modal.confirm({
      nzTitle: '确定导入这条船舶数据吗？',
      nzContent: string5,
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          const info = {
            "voyage_id":this.displayData[0].voyage_id,
            "ship_name":this.displayData[0].ship_name,
            "remarks":this.displayData[0].remarks,
          }
          this.blogservice.currentplan(info).subscribe(Result=>{
            if(Result.err_code == 204){
              this.message.error('这条数据已存在，不可重复导入！')
            }
            if(Result.err_code == 102){
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              this.message.success('方案导入成功！')
            }
          })
        }).catch(() => console.log('Oops errors!'))
    });
    
  }

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search(): void {
    if (this.sortName) {
      this.displayData = this.TOSdata.sort((a, b) => (this.sortValue === 'ascend') ?
      (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = this.TOSdata;
    }
  }
}
