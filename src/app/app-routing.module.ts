import { HomeComponent } from './pages/shell/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShellComponent } from './pages/shell/shell.component';
import { DeclarationComponent } from './pages/shell/declaration/declaration.component';
import { UserinfoComponent } from './pages/shell/userinfo/userinfo.component';

import { UsermanagementComponent } from './pages/shell/usermanagement/usermanagement.component';
import { TestComponent } from './pages/test/test.component';
import { ShipinfoImportComponent } from './pages/shell/shipinfo-import/shipinfo-import.component';
import { FieldboxdataComponent } from './pages/shell/fieldboxdata/fieldboxdata.component';
import { PreplanComponent } from './pages/shell/preplan/preplan.component';
import { CurrentplanComponent } from './pages/shell/currentplan/currentplan.component';
import { ExamplemanagementComponent } from './pages/shell/currentplan/examplemanagement/examplemanagement.component';
import { HoldComponent } from './pages/shell/currentplan/examplemanagement/hold/hold.component';
import { DeckComponent } from './pages/shell/currentplan/examplemanagement/deck/deck.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'shell',
    component: ShellComponent
  },
  {
    path: 'shell/declaration',
    component: DeclarationComponent,
    data: {
      breadcrumb: 'xxx'
    }
  },
  {
    path: 'shell/home',
    component: HomeComponent
  },
  {
    path: 'shell/userinfo',
    component: UserinfoComponent
  },
  {
    path: 'shell/usermanagement',
    component: UsermanagementComponent
  },
  {
    path: 'shell/shipinfoimport',
    component: ShipinfoImportComponent,
    data: {
      breadcrumb: '船舶信息导入'
    }
  },
  {
    path: 'shell/fieldboxdata',
    component: FieldboxdataComponent,
    data: {
      breadcrumb: '在场箱数据'
    }
  },
  {
    path: 'shell/preplan',
    component: PreplanComponent,
    data: {
      breadcrumb: '预配数据'
    }
  },
  {
    path: 'shell/plan',
    component:CurrentplanComponent ,
    data: {
      breadcrumb: '配载案例管理'
    }
  },
  {
    path: 'shell/plan/examplemanagement',
    component:ExamplemanagementComponent ,
    data: {
      breadcrumb: '配载案例管理 '+'\xa0\xa0'+'/'+'\xa0\xa0'+' 算例管理'
    }
  },
  {
    path: 'shell/plan/examplemanagement/deck',
    component:DeckComponent ,
    data: {
      breadcrumb: '配载案例管理 '+'\xa0\xa0'+'/'+'\xa0\xa0'+' 算例管理'+'\xa0\xa0'+'/'+'\xa0\xa0'+' 舱面结果'
    }
  },
  {
    path: 'shell/plan/examplemanagement/hold',
    component:HoldComponent ,
    data: {
      breadcrumb: '配载案例管理 '+'\xa0\xa0'+'/'+'\xa0\xa0'+' 算例管理'+'\xa0\xa0'+'/'+'\xa0\xa0'+' 舱内结果'
    }
  },
  {
    path: 'test',
    component: TestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
