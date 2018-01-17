"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_service_1 = require("./../datasource/data.service");
var loan_model_1 = require("./loan.model");
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var LoanComponent = (function () {
    function LoanComponent(dataManagerService, changeDetectionRef, routerExtension) {
        this.dataManagerService = dataManagerService;
        this.changeDetectionRef = changeDetectionRef;
        this.routerExtension = routerExtension;
        this.amortization = new Array();
        this.loanParameters = new loan_model_1.LoanModel();
        this.loanSummaryData = new loan_model_1.LoanSummary();
        this.monthlyPayment = 0;
        this.downPayment = 0;
        this.principal = 0;
        this.totalInterest = 0;
        this.totalToPay = 0;
        this.finalCost = 0;
        this.tabSelectedIndex = 0;
    }
    LoanComponent.prototype.ngOnInit = function () { };
    LoanComponent.prototype.getData = function () {
        var _this = this;
        this.dataManagerService.GetLoanSummaryData(this.loanParameters)
            .then(function (data) {
            _this.loanSummaryData = data;
            _this.amortization = _this.loanSummaryData.amortizationTable;
            _this.monthlyPayment = _this.loanSummaryData.monthlyPayment;
            _this.downPayment = _this.loanSummaryData.downPayment;
            _this.principal = _this.loanSummaryData.initialPrincipal;
            _this.totalInterest = _this.loanSummaryData.totalInterest;
            _this.totalToPay = _this.loanSummaryData.interestPlusPrincipal;
            _this.finalCost = _this.loanSummaryData.finalCost;
            _this.routerExtension
                .navigate(["/loan/loandetails"], {
                transition: {
                    name: "slideLeft"
                }
            });
        });
    };
    LoanComponent = __decorate([
        core_1.Component({
            selector: "Loan",
            moduleId: module.id,
            templateUrl: "./loan.component.html"
        }),
        __metadata("design:paramtypes", [data_service_1.DataManagerService, core_1.ChangeDetectorRef, nativescript_angular_1.RouterExtensions])
    ], LoanComponent);
    return LoanComponent;
}());
exports.LoanComponent = LoanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUFrRTtBQUNsRSwyQ0FBK0U7QUFDL0Usc0NBQXFFO0FBQ3JFLDZEQUF3RDtBQVN4RDtJQUdJLHVCQUFvQixrQkFBc0MsRUFBVSxrQkFBcUMsRUFBUyxlQUFpQztRQUEvSCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUk1SSxpQkFBWSxHQUFtQyxJQUFJLEtBQUssRUFBMkIsQ0FBQztRQUNwRixtQkFBYyxHQUFjLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQzVDLG9CQUFlLEdBQWdCLElBQUksd0JBQVcsRUFBRSxDQUFDO1FBQ2pELG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztJQVpuQyxDQUFDO0lBQ0YsZ0NBQVEsR0FBUixjQUFrQixDQUFDO0lBWVosK0JBQU8sR0FBZDtRQUFBLGlCQXNCQztRQXBCRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUMxRCxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ04sS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFFNUIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDO1lBQzNELEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUM7WUFDMUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUNwRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7WUFDdkQsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztZQUN4RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUM7WUFDN0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUNoRCxLQUFJLENBQUMsZUFBZTtpQkFDbkIsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRTtnQkFDN0IsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxXQUFXO2lCQUNwQjthQUNKLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQXZDUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUkwQyxpQ0FBa0IsRUFBOEIsd0JBQWlCLEVBQTBCLHVDQUFnQjtPQUgxSSxhQUFhLENBMkN6QjtJQUFELG9CQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLy4uL2RhdGFzb3VyY2UvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9hbk1vZGVsLCBMb2FuU3VtbWFyeSwgQW1vcnRpemF0aW9uVGFibGVFbnRpdHkgfSBmcm9tICcuL2xvYW4ubW9kZWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvYW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvYW4uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhTWFuYWdlclNlcnZpY2U6IERhdGFNYW5hZ2VyU2VydmljZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zKSBcclxuICAgIHt9XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gICAgcHVibGljIGFtb3J0aXphdGlvbjogQXJyYXk8QW1vcnRpemF0aW9uVGFibGVFbnRpdHk+ID0gbmV3IEFycmF5PEFtb3J0aXphdGlvblRhYmxlRW50aXR5PigpO1xyXG4gICAgcHVibGljIGxvYW5QYXJhbWV0ZXJzOiBMb2FuTW9kZWwgPSBuZXcgTG9hbk1vZGVsKCk7XHJcbiAgICBwdWJsaWMgbG9hblN1bW1hcnlEYXRhOiBMb2FuU3VtbWFyeSA9IG5ldyBMb2FuU3VtbWFyeSgpO1xyXG4gICAgcHVibGljIG1vbnRobHlQYXltZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGRvd25QYXltZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHByaW5jaXBhbDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB0b3RhbEludGVyZXN0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRvdGFsVG9QYXk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZmluYWxDb3N0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0RGF0YSgpIHtcclxuICAgICBcclxuICAgICAgICB0aGlzLmRhdGFNYW5hZ2VyU2VydmljZS5HZXRMb2FuU3VtbWFyeURhdGEodGhpcy5sb2FuUGFyYW1ldGVycylcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYW5TdW1tYXJ5RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYW1vcnRpemF0aW9uID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuYW1vcnRpemF0aW9uVGFibGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRobHlQYXltZW50ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEubW9udGhseVBheW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd25QYXltZW50ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuZG93blBheW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW5jaXBhbCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmluaXRpYWxQcmluY2lwYWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsSW50ZXJlc3QgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS50b3RhbEludGVyZXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFRvUGF5ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuaW50ZXJlc3RQbHVzUHJpbmNpcGFsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5hbENvc3QgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5maW5hbENvc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvblxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRlKFtcIi9sb2FuL2xvYW5kZXRhaWxzXCJdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG59XHJcblxyXG4iXX0=