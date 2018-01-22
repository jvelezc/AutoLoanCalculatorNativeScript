"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_service_1 = require("./../datasource/data.service");
var loan_model_1 = require("./loan.model");
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var angular_1 = require("nativescript-pro-ui/dataform/angular");
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
var loader = new LoadingIndicator();
var options = {
    message: 'Calculating payment schedule...',
    progress: 0.65,
    android: {
        indeterminate: true,
        cancelable: true,
        cancelListener: function (dialog) { console.log("Loading cancelled"); },
        max: 100,
        progressNumberFormat: "%1d/%2d",
        progressPercentFormat: 0.53,
        progressStyle: 1,
        secondaryProgress: 1
    }
};
var LoanComponent = (function () {
    function LoanComponent(dataManagerService, changeDetectionRef, routerExtension, fonticon) {
        this.dataManagerService = dataManagerService;
        this.changeDetectionRef = changeDetectionRef;
        this.routerExtension = routerExtension;
        this.fonticon = fonticon;
        //@ViewChild("resultLabel") resultLabel: ElementRef;
        this.isDataCalculated = false;
        this.hasError = null;
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
        var hasErrors = this.dataFormComp.dataForm.hasValidationErrors();
        if (!hasErrors) {
            loader.show(options); // options is optional
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
                _this.isDataCalculated = true;
                loader.hide();
            });
        }
        ;
    };
    LoanComponent.prototype.calculateNew = function () {
        this.isDataCalculated = false;
        this.loanSummaryData = new loan_model_1.LoanSummary();
        this.loanParameters = new loan_model_1.LoanModel();
        this.monthlyPayment = 0;
        this.totalToPay = 0;
    };
    __decorate([
        core_1.ViewChild("myDataForm"),
        __metadata("design:type", angular_1.RadDataFormComponent)
    ], LoanComponent.prototype, "dataFormComp", void 0);
    LoanComponent = __decorate([
        core_1.Component({
            selector: "Loan",
            moduleId: module.id,
            templateUrl: "./loan.component.html",
            styleUrls: ["./loan.component.css"]
        }),
        __metadata("design:paramtypes", [data_service_1.DataManagerService, core_1.ChangeDetectorRef, nativescript_angular_1.RouterExtensions,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], LoanComponent);
    return LoanComponent;
}());
exports.LoanComponent = LoanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUFrRTtBQUNsRSwyQ0FBK0U7QUFDL0Usc0NBQTRGO0FBQzVGLDZEQUF3RDtBQUd4RCx1RUFBK0Q7QUFDL0QsZ0VBQTRFO0FBRTVFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDbEYsSUFBSSxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3BDLElBQUksT0FBTyxHQUFHO0lBQ1YsT0FBTyxFQUFFLGlDQUFpQztJQUMxQyxRQUFRLEVBQUUsSUFBSTtJQUNkLE9BQU8sRUFBRTtRQUNMLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGNBQWMsRUFBRSxVQUFVLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ3RFLEdBQUcsRUFBRSxHQUFHO1FBQ1Isb0JBQW9CLEVBQUUsU0FBUztRQUMvQixxQkFBcUIsRUFBRSxJQUFJO1FBQzNCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLGlCQUFpQixFQUFFLENBQUM7S0FDdkI7Q0FDSixDQUFDO0FBUUY7SUFHSSx1QkFBb0Isa0JBQXNDLEVBQVUsa0JBQXFDLEVBQVUsZUFBaUMsRUFDeEksUUFBNEI7UUFEcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDeEksYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFJeEMsb0RBQW9EO1FBQzdDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVsQyxhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGlCQUFZLEdBQW1DLElBQUksS0FBSyxFQUEyQixDQUFDO1FBQ3BGLG1CQUFjLEdBQWMsSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFDNUMsb0JBQWUsR0FBZ0IsSUFBSSx3QkFBVyxFQUFFLENBQUM7UUFDakQsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO0lBakJRLENBQUM7SUFDN0MsZ0NBQVEsR0FBUixjQUFtQixDQUFDO0lBaUJiLCtCQUFPLEdBQWQ7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNqRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1lBQzVDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2lCQUUxRCxJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNOLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUU1QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztnQkFDeEQsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDO2dCQUM3RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFFTSxvQ0FBWSxHQUFuQjtRQUVJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLHdCQUFXLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUE3Q3dCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFlLDhCQUFvQjt1REFBQztJQVBuRCxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUkwQyxpQ0FBa0IsRUFBOEIsd0JBQWlCLEVBQTJCLHVDQUFnQjtZQUM5SCw4Q0FBa0I7T0FKL0IsYUFBYSxDQXdEekI7SUFBRCxvQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9kYXRhc291cmNlL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IExvYW5Nb2RlbCwgTG9hblN1bW1hcnksIEFtb3J0aXphdGlvblRhYmxlRW50aXR5IH0gZnJvbSAnLi9sb2FuLm1vZGVsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBSYWREYXRhRm9ybUNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2RhdGFmb3JtL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xyXG52YXIgTG9hZGluZ0luZGljYXRvciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIikuTG9hZGluZ0luZGljYXRvcjtcclxudmFyIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbnZhciBvcHRpb25zID0ge1xyXG4gICAgbWVzc2FnZTogJ0NhbGN1bGF0aW5nIHBheW1lbnQgc2NoZWR1bGUuLi4nLFxyXG4gICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbExpc3RlbmVyOiBmdW5jdGlvbiAoZGlhbG9nKSB7IGNvbnNvbGUubG9nKFwiTG9hZGluZyBjYW5jZWxsZWRcIikgfSxcclxuICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG4gICAgICAgIHByb2dyZXNzU3R5bGU6IDEsXHJcbiAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgIH1cclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTG9hblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9hbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvYW4uY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YU1hbmFnZXJTZXJ2aWNlOiBEYXRhTWFuYWdlclNlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7IH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcIm15RGF0YUZvcm1cIikgZGF0YUZvcm1Db21wOiBSYWREYXRhRm9ybUNvbXBvbmVudDtcclxuICAgIC8vQFZpZXdDaGlsZChcInJlc3VsdExhYmVsXCIpIHJlc3VsdExhYmVsOiBFbGVtZW50UmVmO1xyXG4gICAgcHVibGljIGlzRGF0YUNhbGN1bGF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBoYXNFcnJvcnNMYWJlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIGhhc0Vycm9yOiBib29sZWFuID0gbnVsbDtcclxuICAgIHB1YmxpYyBhbW9ydGl6YXRpb246IEFycmF5PEFtb3J0aXphdGlvblRhYmxlRW50aXR5PiA9IG5ldyBBcnJheTxBbW9ydGl6YXRpb25UYWJsZUVudGl0eT4oKTtcclxuICAgIHB1YmxpYyBsb2FuUGFyYW1ldGVyczogTG9hbk1vZGVsID0gbmV3IExvYW5Nb2RlbCgpO1xyXG4gICAgcHVibGljIGxvYW5TdW1tYXJ5RGF0YTogTG9hblN1bW1hcnkgPSBuZXcgTG9hblN1bW1hcnkoKTtcclxuICAgIHB1YmxpYyBtb250aGx5UGF5bWVudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBkb3duUGF5bWVudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBwcmluY2lwYWw6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgdG90YWxJbnRlcmVzdDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB0b3RhbFRvUGF5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGZpbmFsQ29zdDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldERhdGEoKSB7XHJcbiAgICAgICAgdmFyIGhhc0Vycm9ycyA9IHRoaXMuZGF0YUZvcm1Db21wLmRhdGFGb3JtLmhhc1ZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgICAgICBpZiAoIWhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICBsb2FkZXIuc2hvdyhvcHRpb25zKTsgLy8gb3B0aW9ucyBpcyBvcHRpb25hbFxyXG4gICAgICAgICAgICB0aGlzLmRhdGFNYW5hZ2VyU2VydmljZS5HZXRMb2FuU3VtbWFyeURhdGEodGhpcy5sb2FuUGFyYW1ldGVycylcclxuXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYW5TdW1tYXJ5RGF0YSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW1vcnRpemF0aW9uID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuYW1vcnRpemF0aW9uVGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aGx5UGF5bWVudCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLm1vbnRobHlQYXltZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG93blBheW1lbnQgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5kb3duUGF5bWVudDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW5jaXBhbCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmluaXRpYWxQcmluY2lwYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbEludGVyZXN0ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEudG90YWxJbnRlcmVzdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVG9QYXkgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5pbnRlcmVzdFBsdXNQcmluY2lwYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbENvc3QgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5maW5hbENvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RhdGFDYWxjdWxhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsY3VsYXRlTmV3KCkge1xyXG5cclxuICAgICAgICB0aGlzLmlzRGF0YUNhbGN1bGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvYW5TdW1tYXJ5RGF0YSA9IG5ldyBMb2FuU3VtbWFyeSgpO1xyXG4gICAgICAgIHRoaXMubG9hblBhcmFtZXRlcnMgPSBuZXcgTG9hbk1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5tb250aGx5UGF5bWVudCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbFRvUGF5ID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ==