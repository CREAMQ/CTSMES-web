import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.less']
})
export class DeckComponent implements OnInit {

options = [
    {
      value: '826f5@NYC-40-HC-F-H',
      label: '826f5@NYC-40-HC-F-H',
      children: [
        {
          value: '078D0',
          label: '078D0',
          isLeaf: true,
        },
      ]
    },
  ];

  panels = [
    {
      active: false,
      disabled: true,
      name: '查看重量范围',
      icon: 'double-right',
      customStyle: {
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px'
      }
    },
  ];
  nzOptions: any[] | null = null;
  values: any[] | null = null;
  username: any;
  type: any;
  uuid: any;
  visible: boolean;
  jiade: boolean = false;
  tabs: Array<{ name: string; content: string }> = [];
  nzTabPosition = 'top';
  selectedIndex = 0;
  listOfData = [
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '56.57',
      amount: '8',
      node: '6_0_9262'
    },
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '55.93',
      amount: '7',
      node: '6_0_9262'
    },
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '51.89',
      amount: '8',
      node: '6_0_9262'
    },
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '50.30',
      amount: '8',
      node: '6_0_9262'
    },
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '30.95',
      amount: '9',
      node: '6_0_9262'
    },
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '29.50',
      amount: '9',
      node: '6_0_9262'
    },
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '28.58',
      amount: '9',
      node: '6_0_9262'
    },
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '27.81',
      amount: '10',
      node: '6_0_9262'
    },
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '26.47',
      amount: '9',
      node: '6_0_9262'
    },

  ];
  constructor(
    private blogservice: BlogService,
    private message: NzMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
      this.username = params['username']
      this.type = params['type']
      this.uuid = params['uuid']
    }) 

    setTimeout(() => {
      this.nzOptions = this.options;
    }, 100);
    // for (let i = 0; i < 11; i++) {
    //   this.tabs.push({
    //     name: `${i}`,
    //     content: `Content of tab ${i}`
    //   });
    // }
  }
  log(args: any[]): void {
    console.log(args);
  }

  onChanges(values: any): void {
    console.log(values, this.values);
    this.jiade = true
  }
  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }
}
