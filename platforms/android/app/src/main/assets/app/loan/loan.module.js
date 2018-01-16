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
                loan_component_1.LoanComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], LoanModule);
    return LoanModule;
}());
exports.LoanModule = LoanModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCxvRUFBeUU7QUFDekUsb0RBQXFFO0FBQ3JFLGdFQUFvRjtBQUNwRixnRUFBb0Y7QUFrQnBGO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFqQnRCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBQyxDQUFDLGlDQUFrQixDQUFDO1lBQzlCLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLHVDQUFpQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTthQUVoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBMb2FuUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2xvYW4tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvYW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2FuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGF0YU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vLi4vYXBwL2RhdGFzb3VyY2UvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9kYXRhZm9ybS9hbmd1bGFyXCI7XG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczpbRGF0YU1hbmFnZXJTZXJ2aWNlXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBMb2FuUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExvYW5Db21wb25lbnRcbiAgICAgIFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FuTW9kdWxlIHsgfVxuIl19