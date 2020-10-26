import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { RegisterComponent } from './pages/register/register.component';
import { ShellComponent } from './pages/shell/shell.component';
import { DeclarationComponent } from './pages/shell/declaration/declaration.component';
import { HomeComponent } from './pages/shell/home/home.component';
import { UserinfoComponent } from './pages/shell/userinfo/userinfo.component';

import { UsermanagementComponent } from './pages/shell/usermanagement/usermanagement.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { TestComponent } from './pages/test/test.component';

import { ShipinfoImportComponent } from './pages/shell/shipinfo-import/shipinfo-import.component';
import { FieldboxdataComponent } from './pages/shell/fieldboxdata/fieldboxdata.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { PreplanComponent } from './pages/shell/preplan/preplan.component';
import { CurrentplanComponent } from './pages/shell/currentplan/currentplan.component';
import { ExamplemanagementComponent } from './pages/shell/currentplan/examplemanagement/examplemanagement.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DeckComponent } from './pages/shell/currentplan/examplemanagement/deck/deck.component';
import { HoldComponent } from './pages/shell/currentplan/examplemanagement/hold/hold.component';
registerLocaleData(zh);


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShellComponent,
    DeclarationComponent,
    HomeComponent,
    UserinfoComponent,

    UsermanagementComponent,
    TestComponent,
    ShipinfoImportComponent,
    FieldboxdataComponent,
    PreplanComponent,
    CurrentplanComponent,
    ExamplemanagementComponent,
    DeckComponent,
    HoldComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzModalModule,
    NzDropDownModule,
    NzBreadCrumbModule,
    NzTableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // 不提供的话，即为 Ant Design 的主题蓝色
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
