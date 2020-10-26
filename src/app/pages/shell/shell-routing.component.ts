import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclarationComponent } from './declaration/declaration.component';
import { ShellComponent } from './shell.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

import { UsermanagementComponent } from './usermanagement/usermanagement.component';

import { ShipinfoImportComponent } from './shipinfo-import/shipinfo-import.component';
import { FieldboxdataComponent } from './fieldboxdata/fieldboxdata.component';
import { PreplanComponent } from './preplan/preplan.component';
import { CurrentplanComponent } from './currentplan/currentplan.component';
import { ExamplemanagementComponent } from './currentplan/examplemanagement/examplemanagement.component';

const routes: Routes = [
    { 
        path: 'shell', 
        component: ShellComponent,
        children:[
            { path:'home', component:HomeComponent},
            { path:'declaration',component:DeclarationComponent },
            { path:'userinfo', component:UserinfoComponent},
            { path:'usermanagement', component:UsermanagementComponent},
            { path:'shipinfoimport',component:ShipinfoImportComponent},
            { path:'fieldboxdata',component:FieldboxdataComponent},
            { path:'perplam',component:PreplanComponent},
            { path:'plan',component:CurrentplanComponent},
            { path:'plan/examplemanagement',component:ExamplemanagementComponent,data: {
                breadcrumb: '算例管理'
              }}
        ]
    },
   
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShellRoutingModule { }