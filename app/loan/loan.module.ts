
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { LoanRoutingModule } from "./loan-routing.module";
import { LoanComponent } from "./loan.component";
import { DataManagerService } from "./../../app/datasource/data.service";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ngx-fonticon';
@NgModule({
    providers:[DataManagerService,TNSFontIconService],
    imports: [
        TNSFontIconModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule ,
        NativeScriptUIListViewModule,
        NativeScriptUIDataFormModule,
        LoanRoutingModule
    ],
    declarations: [
        LoanComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoanModule { }
