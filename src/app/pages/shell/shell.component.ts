import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import{ActivatedRoute,Params} from  '@angular/router';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less']
})
export class ShellComponent implements OnInit {
  isCollapsed = false;
  username: any;
  type: any;
  path: string;
  bread: string;
  iisCollapsed = false;



  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
      this.username = params['username']
      this.type = params['type']
    }) 
  }
  plan(){
    this.router.navigate(['shell/plan'],{queryParams:{username:this.username,type:this.type}})

  }
  userinfo(){
    this.router.navigate(['shell/userinfo'],{queryParams:{username:this.username,type:this.type}})
  }
  statistics(){
    this.router.navigate(['shell/statistics'],{queryParams:{username:this.username,type:this.type}})
  }
  usermanagement(){
    this.router.navigate(['shell/usermanagement'],{queryParams:{username:this.username,type:this.type}})
  }
  news(){
    this.router.navigate(['shell/news'],{queryParams:{username:this.username,type:this.type}})
  }
  shipinfoimport(){
    this.router.navigate(['shell/shipinfoimport'],{queryParams:{username:this.username,type:this.type}})
  }
  fieldboxdata(){
    this.router.navigate(['shell/fieldboxdata'],{queryParams:{username:this.username,type:this.type}})
  }
  preplan(){
    this.router.navigate(['shell/preplan'],{queryParams:{username:this.username,type:this.type}})
  }
  toggleCollapsed(): void {
    this.iisCollapsed = !this.iisCollapsed;
  }
}
