import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hold',
  templateUrl: './hold.component.html',
  styleUrls: ['./hold.component.less']
})
export class HoldComponent implements OnInit {
  options = [
    {
      value: 'c24a0@NYC-40-HC-F-H',
      label: 'c24a0@NYC-40-HC-F-H',
      children: [
        {
          value: '078H',
          label: '078H',
          isLeaf: true,
        },
        {
          value: '074H',
          label: '074H',
          isLeaf: true,
        },
        {
          value: '014H',
          label: '014H',
          isLeaf: true,
        },
        {
          value: '030H',
          label: '030H',
          isLeaf: true,
        },
        {
          value: '058H',
          label: '058H',
          isLeaf: true,
        },
        {
          value: '046H',
          label: '046H',
          isLeaf: true,
        },
        {
          value: '034H',
          label: '034H',
          isLeaf: true,
        },
      ]
    },
    {
      value: '70675@NYC-40-HC-F-H',
      label: '70675@NYC-40-HC-F-H',
      children: [
        {
          value: '078H',
          label: '078H',
          isLeaf: true,
        },
        {
          value: '074H',
          label: '074H',
          isLeaf: true,
        },
        {
          value: '014H',
          label: '014H',
          isLeaf: true,
        },
        {
          value: '030H',
          label: '030H',
          isLeaf: true,
        },
        {
          value: '058H',
          label: '058H',
          isLeaf: true,
        },
        {
          value: '046H',
          label: '046H',
          isLeaf: true,
        },
        {
          value: '034H',
          label: '034H',
          isLeaf: true,
        },
      ]
    },
    {
      value: '6fe4e@NYC-40-HC-F-H',
      label: '6fe4e@NYC-40-HC-F-H',
      children: [
        {
          value: '078H',
          label: '078H',
          isLeaf: true,
        },
        {
          value: '074H',
          label: '074H',
          isLeaf: true,
        },
        {
          value: '014H',
          label: '014H',
          isLeaf: true,
        },
        {
          value: '030H',
          label: '030H',
          isLeaf: true,
        },
        {
          value: '058H',
          label: '058H',
          isLeaf: true,
        },
        {
          value: '046H',
          label: '046H',
          isLeaf: true,
        },
        {
          value: '034H',
          label: '034H',
          isLeaf: true,
        },
      ]
    },
    {
      value: 'c8f8f@NYC-40-HC-F-H',
      label: 'c8f8f@NYC-40-HC-F-H',
      children: [
        {
          value: '078H',
          label: '078H',
          isLeaf: true,
        },
        {
          value: '074H',
          label: '074H',
          isLeaf: true,
        },
        {
          value: '014H',
          label: '014H',
          isLeaf: true,
        },
        {
          value: '030H',
          label: '030H',
          isLeaf: true,
        },
        {
          value: '058H',
          label: '058H',
          isLeaf: true,
        },
        {
          value: '046H',
          label: '046H',
          isLeaf: true,
        },
        {
          value: '034H',
          label: '034H',
          isLeaf: true,
        },
      ]
    },
    {
      value: 'e5fff@NYC-40-HC-F-H',
      label: 'e5fff@NYC-40-HC-F-H',
      children: [
        {
          value: '078H',
          label: '078H',
          isLeaf: true,
        },
        {
          value: '074H',
          label: '074H',
          isLeaf: true,
        },
        {
          value: '014H',
          label: '014H',
          isLeaf: true,
        },
        {
          value: '030H',
          label: '030H',
          isLeaf: true,
        },
        {
          value: '058H',
          label: '058H',
          isLeaf: true,
        },
        {
          value: '046H',
          label: '046H',
          isLeaf: true,
        },
        {
          value: '034H',
          label: '034H',
          isLeaf: true,
        },
      ]
    },
    {
      value: '25f43@NYC-40-HC-F-H',
      label: '25f43@NYC-40-HC-F-H',
      children: [
        {
          value: '078H',
          label: '078H',
          isLeaf: true,
        },
        {
          value: '074H',
          label: '074H',
          isLeaf: true,
        },
        {
          value: '014H',
          label: '014H',
          isLeaf: true,
        },
        {
          value: '030H',
          label: '030H',
          isLeaf: true,
        },
        {
          value: '058H',
          label: '058H',
          isLeaf: true,
        },
        {
          value: '046H',
          label: '046H',
          isLeaf: true,
        },
        {
          value: '034H',
          label: '034H',
          isLeaf: true,
        },
      ]
    },
    {
      value: '5782e@NYC-40-HC-F-H',
      label: '5782e@NYC-40-HC-F-H',
      children: [
        {
          value: '078H',
          label: '078H',
          isLeaf: true,
        },
        {
          value: '074H',
          label: '074H',
          isLeaf: true,
        },
        {
          value: '014H',
          label: '014H',
          isLeaf: true,
        },
        {
          value: '030H',
          label: '030H',
          isLeaf: true,
        },
        {
          value: '058H',
          label: '058H',
          isLeaf: true,
        },
        {
          value: '046H',
          label: '046H',
          isLeaf: true,
        },
        {
          value: '034H',
          label: '034H',
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
  radioValue = '1';
  username: any;
  type: any;
  uuid: any;
  visible: boolean;
  jiade: boolean = false;
  tabs: Array<{ name: string; content: string }> = [];
  nzTabPosition = 'top';
  selectedIndex = 0;
  value = '2_3_51969@3_10_143567';
  listOfData = [
    {
      completerate: '100%',
      zhengqvrate: '100%',
      socre: '78.38',
      amount: '14',
      sum:'52',
      node: '2_3_51'
    },
    // {
    //   completerate: '100%',
    //   zhengqvrate: '100%',
    //   socre: '55.93',
    //   amount: '7',
    //   node: '6_0_9262'
    // },
    // {
    //   completerate: '100%',
    //   zhengqvrate: '100%',
    //   socre: '51.89',
    //   amount: '8',
    //   node: '6_0_9262'
    // },
    // {
    //   completerate: '100%',
    //   zhengqvrate: '100%',
    //   socre: '50.30',
    //   amount: '8',
    //   node: '6_0_9262'
    // },
    // {
    //   completerate: '100%',
    //   zhengqvrate: '100%',
    //   socre: '30.95',
    //   amount: '9',
    //   node: '6_0_9262'
    // },
    // {
    //   completerate: '100%',
    //   zhengqvrate: '100%',
    //   socre: '29.50',
    //   amount: '9',
    //   node: '6_0_9262'
    // },
    // {
    //   completerate: '100%',
    //   zhengqvrate: '100%',
    //   socre: '28.58',
    //   amount: '9',
    //   node: '6_0_9262'
    // },
    // {
    //   completerate: '100%',
    //   zhengqvrate: '100%',
    //   socre: '27.81',
    //   amount: '10',
    //   node: '6_0_9262'
    // },
    // {
    //   completerate: '100%',
    //   zhengqvrate: '100%',
    //   socre: '26.47',
    //   amount: '9',
    //   node: '6_0_9262'
    // },

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
