"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var loan_routing_module_1 = require("./loan-routing.module");
var loan_component_1 = require("./loan.component");
var data_service_1 = require("./../../app/datasource/data.service");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var angular_2 = require("nativescript-pro-ui/dataform/angular");
var loan_details_component_1 = require("./loandetails/loan-details.component");
var LoanModule = (function () {
    function LoanModule() {
    }
    LoanModule = __decorate([
        core_1.NgModule({
            providers: [data_service_1.DataManagerService],
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule,
                loan_routing_module_1.LoanRoutingModule
            ],
            declarations: [
                loan_component_1.LoanComponent,
                loan_details_component_1.LoanDetailsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], LoanModule);
    return LoanModule;
}());
exports.LoanModule = LoanModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCxvRUFBeUU7QUFDekUsb0RBQXFFO0FBQ3JFLGdFQUFvRjtBQUNwRixnRUFBb0Y7QUFDcEYsK0VBQTRFO0FBbUI1RTtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBbEJ0QixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUMsQ0FBQyxpQ0FBa0IsQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ3ZCLHNDQUE0QjtnQkFDNUIsc0NBQTRCO2dCQUM1Qix1Q0FBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7Z0JBQ2IsNkNBQW9CO2FBRXZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IExvYW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbG9hbi1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBMb2FuQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9hbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGF0YU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vLi4vYXBwL2RhdGFzb3VyY2UvZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9kYXRhZm9ybS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IExvYW5EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9hbmRldGFpbHMvbG9hbi1kZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgcHJvdmlkZXJzOltEYXRhTWFuYWdlclNlcnZpY2VdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSAsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxyXG4gICAgICAgIExvYW5Sb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTG9hbkNvbXBvbmVudCxcclxuICAgICAgICBMb2FuRGV0YWlsc0NvbXBvbmVudFxyXG4gICAgICBcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hbk1vZHVsZSB7IH1cclxuIl19