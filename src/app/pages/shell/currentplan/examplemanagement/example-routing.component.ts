import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplemanagementComponent } from './examplemanagement.component';
import { DeckComponent } from './deck/deck.component';
import { HoldComponent } from './hold/hold.component';


const routes: Routes = [
    { 
        path: 'examplemanagement', 
        component: ExamplemanagementComponent,
        children:[
            { path:'deck', component:DeckComponent},
            { path:'hold', component:HoldComponent},

        ]
    },
   
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanRoutingModule { }