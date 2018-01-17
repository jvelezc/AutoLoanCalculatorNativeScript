"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loan_details_component_1 = require("./loandetails/loan-details.component");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var loan_component_1 = require("./loan.component");
var routes = [
    {
        path: "", component: loan_component_1.LoanComponent
    },
    { path: "loandetails", component: loan_details_component_1.LoanDetailsComponent }
];
var LoanRoutingModule = (function () {
    function LoanRoutingModule() {
    }
    LoanRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], LoanRoutingModule);
    return LoanRoutingModule;
}());
exports.LoanRoutingModule = LoanRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrRUFBNEU7QUFDNUUsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxtREFBaUQ7QUFDakQsSUFBTSxNQUFNLEdBQVc7SUFDbkI7UUFDSSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYTtLQUVyQztJQUNELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7Q0FFM0QsQ0FBQTtBQU9EO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9hbkRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2xvYW5kZXRhaWxzL2xvYW4tZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTG9hbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvYW4uY29tcG9uZW50XCI7XHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTG9hbkNvbXBvbmVudFxyXG4gICAgICAgIFxyXG4gICAgfSwgXHJcbiAgICB7IHBhdGg6IFwibG9hbmRldGFpbHNcIiwgY29tcG9uZW50OiBMb2FuRGV0YWlsc0NvbXBvbmVudCB9XHJcbiAgIFxyXG5dXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hblJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==