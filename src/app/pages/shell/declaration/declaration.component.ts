import { Result } from './../../../models/result';
import { Component, OnInit } from '@angular/core';
import { NzCascaderOption, NzMessageService } from 'ng-zorro-antd';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/service/blog.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
// import { PassThrough } from 'stream';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.less']
})
export class DeclarationComponent implements OnInit {
  username: any;
  type: any;
  pagesize: number = 7;
  dataSet = [
    {
      key: '1',
      plan_id: 'X2020011521',
      ship_name: 'COSFU8',
      voyage_number: 'COSCO FORT',
      berthing_direction: '',
      box_quantity: '1738',
      isInversion: '倒配',
      LUbay: '',
      remarks: '',
      datetime: '',
      user_id: '007',
    },
    {
      key: '2',
      plan_id: 'X2020011521',
      ship_name: 'COSFU8',
      voyage_number: 'COSCO FORT',
      berthing_direction: '',
      box_quantity: '1738',
      isInversion: '倒配',
      LUbay: '',
      remarks: '',
      datetime: '',
      user_id: '007',
    },
    {
      key: '3',
      plan_id: 'X2020011521',
      ship_name: 'COSFU8',
      voyage_number: 'COSCO FORT',
      berthing_direction: '',
      box_quantity: '1738',
      isInversion: '倒配',
      LUbay: '',
      remarks: '',
      datetime: '',
      user_id: '007',
    },
    {
      key: '4',
      plan_id: 'X2020011521',
      ship_name: 'COSFU8',
      voyage_number: 'COSCO FORT',
      berthing_direction: '',
      box_quantity: '1738',
      isInversion: '倒配',
      LUbay: '',
      remarks: '',
      datetime: '',
      user_id: '007',
    },
    {
      key: '5',
      plan_id: 'X2020011521',
      ship_name: 'COSFU8',
      voyage_number: 'COSCO FORT',
      berthing_direction: '',
      box_quantity: '1738',
      isInversion: '倒配',
      LUbay: '',
      remarks: '',
      datetime: '',
      user_id: '007',
    },
    {
      key: '6',
      plan_id: 'X2020011521',
      ship_name: 'COSFU8',
      voyage_number: 'COSCO FORT',
      berthing_direction: '',
      box_quantity: '1738',
      isInversion: '倒配',
      LUbay: '',
      remarks: '',
      datetime: '',
      user_id: '007',
    },
    {
      key: '7',
      plan_id: 'X2020011521',
      ship_name: 'COSFU8',
      voyage_number: 'COSCO FORT',
      berthing_direction: '',
      box_quantity: '1738',
      isInversion: '倒配',
      LUbay: '',
      remarks: '',
      datetime: '',
      user_id: '007',
    },
    {
      key: '8',
      plan_id: 'X2020011521',
      ship_name: 'COSFU8',
      voyage_number: 'COSCO FORT',
      berthing_direction: '',
      box_quantity: '1738',
      isInversion: '倒配',
      LUbay: '',
      remarks: '',
      datetime: '',
      user_id: '007',
    },
    {
      key: '9',
      plan_id: 'X2020011521',
      ship_name: 'COSFU8',
      voyage_number: 'COSCO FORT',
      berthing_direction: '',
      box_quantity: '1738',
      isInversion: '倒配',
      LUbay: '',
      remarks: '',
      datetime: '',
      user_id: '007',
    },
  ];
  selectedValue = null;
  isAllDisplayDataChecked = false;

  isIndeterminate = false;
  listOfDisplayData: Data[] = [];
  listOfAllData: Data[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  constructor(private blogservice: BlogService,
    private message: NzMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute, ) { }

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.username = params['username']
      this.type = params['type']
      console.log(this.username,this.type)
    })

  }
  plan(){
    console.log('sss')
  }
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length;
  }
}


