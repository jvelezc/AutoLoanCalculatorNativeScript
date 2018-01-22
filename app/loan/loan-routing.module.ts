import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoanComponent } from "./loan.component";
const routes: Routes = [
    {
        path: "", component: LoanComponent
        
    }
]


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LoanRoutingModule { }
