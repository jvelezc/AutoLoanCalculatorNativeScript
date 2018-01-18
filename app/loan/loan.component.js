"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_service_1 = require("./../datasource/data.service");
var loan_model_1 = require("./loan.model");
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var LoanComponent = (function () {
    function LoanComponent(dataManagerService, changeDetectionRef, routerExtension, fonticon) {
        this.dataManagerService = dataManagerService;
        this.changeDetectionRef = changeDetectionRef;
        this.routerExtension = routerExtension;
        this.fonticon = fonticon;
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
        __metadata("design:paramtypes", [data_service_1.DataManagerService, core_1.ChangeDetectorRef, nativescript_angular_1.RouterExtensions,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], LoanComponent);
    return LoanComponent;
}());
exports.LoanComponent = LoanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUFrRTtBQUNsRSwyQ0FBK0U7QUFDL0Usc0NBQXFFO0FBQ3JFLDZEQUF3RDtBQUd4RCx1RUFBK0Q7QUFPL0Q7SUFHSSx1QkFBb0Isa0JBQXNDLEVBQVUsa0JBQXFDLEVBQVMsZUFBaUMsRUFDdkksUUFBNEI7UUFEcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDdkksYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFJakMsaUJBQVksR0FBbUMsSUFBSSxLQUFLLEVBQTJCLENBQUM7UUFDcEYsbUJBQWMsR0FBYyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUM1QyxvQkFBZSxHQUFnQixJQUFJLHdCQUFXLEVBQUUsQ0FBQztRQUNqRCxtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7SUFabkMsQ0FBQztJQUNGLGdDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQVlaLCtCQUFPLEdBQWQ7UUFBQSxpQkF1QkM7UUFyQkcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFFMUQsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBRTVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztZQUMzRCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDO1lBQzFELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDcEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZELEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7WUFDeEQsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDO1lBQzdELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDaEQsS0FBSSxDQUFDLGVBQWU7aUJBQ25CLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQzdCLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsV0FBVztpQkFDcEI7YUFDSixDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUF6Q1EsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FJMEMsaUNBQWtCLEVBQThCLHdCQUFpQixFQUEwQix1Q0FBZ0I7WUFDN0gsOENBQWtCO09BSi9CLGFBQWEsQ0E2Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vLi4vZGF0YXNvdXJjZS9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2FuTW9kZWwsIExvYW5TdW1tYXJ5LCBBbW9ydGl6YXRpb25UYWJsZUVudGl0eSB9IGZyb20gJy4vbG9hbi5tb2RlbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvYW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvYW4uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhTWFuYWdlclNlcnZpY2U6IERhdGFNYW5hZ2VyU2VydmljZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkgXHJcbiAgICB7fVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICAgIHB1YmxpYyBhbW9ydGl6YXRpb246IEFycmF5PEFtb3J0aXphdGlvblRhYmxlRW50aXR5PiA9IG5ldyBBcnJheTxBbW9ydGl6YXRpb25UYWJsZUVudGl0eT4oKTtcclxuICAgIHB1YmxpYyBsb2FuUGFyYW1ldGVyczogTG9hbk1vZGVsID0gbmV3IExvYW5Nb2RlbCgpO1xyXG4gICAgcHVibGljIGxvYW5TdW1tYXJ5RGF0YTogTG9hblN1bW1hcnkgPSBuZXcgTG9hblN1bW1hcnkoKTtcclxuICAgIHB1YmxpYyBtb250aGx5UGF5bWVudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBkb3duUGF5bWVudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBwcmluY2lwYWw6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgdG90YWxJbnRlcmVzdDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB0b3RhbFRvUGF5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGZpbmFsQ29zdDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldERhdGEoKSB7XHJcbiAgICAgXHJcbiAgICAgICAgdGhpcy5kYXRhTWFuYWdlclNlcnZpY2UuR2V0TG9hblN1bW1hcnlEYXRhKHRoaXMubG9hblBhcmFtZXRlcnMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FuU3VtbWFyeURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtb3J0aXphdGlvbiA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmFtb3J0aXphdGlvblRhYmxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aGx5UGF5bWVudCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLm1vbnRobHlQYXltZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb3duUGF5bWVudCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmRvd25QYXltZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5pbml0aWFsUHJpbmNpcGFsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbEludGVyZXN0ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEudG90YWxJbnRlcmVzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxUb1BheSA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmludGVyZXN0UGx1c1ByaW5jaXBhbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluYWxDb3N0ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuZmluYWxDb3N0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25cclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0ZShbXCIvbG9hbi9sb2FuZGV0YWlsc1wiXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxufVxyXG5cclxuIl19