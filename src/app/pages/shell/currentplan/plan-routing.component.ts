import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentplanComponent } from './currentplan.component';
import { ExamplemanagementComponent } from './examplemanagement/examplemanagement.component';

const routes: Routes = [
    { 
        path: 'plan', 
        component: CurrentplanComponent,
        children:[
            { path:'examplemanagement', component:ExamplemanagementComponent,data: {
                breadcrumb: '算例管s理'
              }},
            
        ] 
    },
   
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanRoutingModule { }