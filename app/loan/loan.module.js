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
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var LoanModule = (function () {
    function LoanModule() {
    }
    LoanModule = __decorate([
        core_1.NgModule({
            providers: [data_service_1.DataManagerService, nativescript_ngx_fonticon_1.TNSFontIconService],
            imports: [
                nativescript_ngx_fonticon_1.TNSFontIconModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCxvRUFBeUU7QUFDekUsb0RBQXFFO0FBQ3JFLGdFQUFvRjtBQUNwRixnRUFBb0Y7QUFDcEYsdUVBQWtGO0FBa0JsRjtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBakJ0QixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUMsQ0FBQyxpQ0FBa0IsRUFBQyw4Q0FBa0IsQ0FBQztZQUNqRCxPQUFPLEVBQUU7Z0JBQ0wsNkNBQWlCO2dCQUNqQixpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLHVDQUFpQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBMb2FuUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2xvYW4tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTG9hbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvYW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhdGFNYW5hZ2VyU2VydmljZSB9IGZyb20gXCIuLy4uLy4uL2FwcC9kYXRhc291cmNlL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvZGF0YWZvcm0vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSwgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBwcm92aWRlcnM6W0RhdGFNYW5hZ2VyU2VydmljZSxUTlNGb250SWNvblNlcnZpY2VdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSAsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxyXG4gICAgICAgIExvYW5Sb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTG9hbkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FuTW9kdWxlIHsgfVxyXG4iXX0=