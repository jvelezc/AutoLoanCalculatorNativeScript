import { LoanDetailsComponent } from './loandetails/loan-details.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoanComponent } from "./loan.component";
const routes: Routes = [
    {
        path: "", component: LoanComponent
        
    }, 
    { path: "loandetails", component: LoanDetailsComponent }
   
]


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LoanRoutingModule { }
