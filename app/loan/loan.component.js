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
    message: 'Getting Loan Details...',
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
        if (hasErrors != true) {
            this.hasError = false;
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
    __decorate([
        core_1.ViewChild("resultLabel"),
        __metadata("design:type", core_1.ElementRef)
    ], LoanComponent.prototype, "resultLabel", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUFrRTtBQUNsRSwyQ0FBK0U7QUFDL0Usc0NBQTRGO0FBQzVGLDZEQUF3RDtBQUd4RCx1RUFBK0Q7QUFDL0QsZ0VBQTRFO0FBRTVFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDbEYsSUFBSSxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3BDLElBQUksT0FBTyxHQUFHO0lBQ1YsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQyxRQUFRLEVBQUUsSUFBSTtJQUNkLE9BQU8sRUFBRTtRQUNMLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGNBQWMsRUFBRSxVQUFVLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ3RFLEdBQUcsRUFBRSxHQUFHO1FBQ1Isb0JBQW9CLEVBQUUsU0FBUztRQUMvQixxQkFBcUIsRUFBRSxJQUFJO1FBQzNCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLGlCQUFpQixFQUFFLENBQUM7S0FDdkI7Q0FDSixDQUFDO0FBUUY7SUFHSSx1QkFBb0Isa0JBQXNDLEVBQVUsa0JBQXFDLEVBQVUsZUFBaUMsRUFDeEksUUFBNEI7UUFEcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDeEksYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFLakMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsaUJBQVksR0FBbUMsSUFBSSxLQUFLLEVBQTJCLENBQUM7UUFDcEYsbUJBQWMs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YXRhTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLy4uL2RhdGFzb3VyY2UvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9hbk1vZGVsLCBMb2FuU3VtbWFyeSwgQW1vcnRpemF0aW9uVGFibGVFbnRpdHkgfSBmcm9tICcuL2xvYW4ubW9kZWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvZGF0YWZvcm0vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XHJcbnZhciBMb2FkaW5nSW5kaWNhdG9yID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiKS5Mb2FkaW5nSW5kaWNhdG9yO1xyXG52YXIgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxudmFyIG9wdGlvbnMgPSB7XHJcbiAgICBtZXNzYWdlOiAnR2V0dGluZyBMb2FuIERldGFpbHMuLi4nLFxyXG4gICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbExpc3RlbmVyOiBmdW5jdGlvbiAoZGlhbG9nKSB7IGNvbnNvbGUubG9nKFwiTG9hZGluZyBjYW5jZWxsZWRcIikgfSxcclxuICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG4gICAgICAgIHByb2dyZXNzU3R5bGU6IDEsXHJcbiAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgIH1cclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTG9hblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9hbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvYW4uY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YU1hbmFnZXJTZXJ2aWNlOiBEYXRhTWFuYWdlclNlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7IH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcIm15RGF0YUZvcm1cIikgZGF0YUZvcm1Db21wOiBSYWREYXRhRm9ybUNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJyZXN1bHRMYWJlbFwiKSByZXN1bHRMYWJlbDogRWxlbWVudFJlZjtcclxuICAgIHB1YmxpYyBpc0RhdGFDYWxjdWxhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaGFzRXJyb3JzTGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBoYXNFcnJvcjogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgYW1vcnRpemF0aW9uOiBBcnJheTxBbW9ydGl6YXRpb25UYWJsZUVudGl0eT4gPSBuZXcgQXJyYXk8QW1vcnRpemF0aW9uVGFibGVFbnRpdHk+KCk7XHJcbiAgICBwdWJsaWMgbG9hblBhcmFtZXRlcnM6IExvYW5Nb2RlbCA9IG5ldyBMb2FuTW9kZWwoKTtcclxuICAgIHB1YmxpYyBsb2FuU3VtbWFyeURhdGE6IExvYW5TdW1tYXJ5ID0gbmV3IExvYW5TdW1tYXJ5KCk7XHJcbiAgICBwdWJsaWMgbW9udGhseVBheW1lbnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZG93blBheW1lbnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcHJpbmNpcGFsOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRvdGFsSW50ZXJlc3Q6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgdG90YWxUb1BheTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBmaW5hbENvc3Q6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBnZXREYXRhKCkge1xyXG4gICAgICAgIHZhciBoYXNFcnJvcnMgPSB0aGlzLmRhdGFGb3JtQ29tcC5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgICAgICAgaWYgKGhhc0Vycm9ycyAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgbG9hZGVyLnNob3cob3B0aW9ucyk7IC8vIG9wdGlvbnMgaXMgb3B0aW9uYWxcclxuICAgICAgICAgICAgdGhpcy5kYXRhTWFuYWdlclNlcnZpY2UuR2V0TG9hblN1bW1hcnlEYXRhKHRoaXMubG9hblBhcmFtZXRlcnMpXHJcblxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FuU3VtbWFyeURhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFtb3J0aXphdGlvbiA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmFtb3J0aXphdGlvblRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGhseVBheW1lbnQgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5tb250aGx5UGF5bWVudDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25QYXltZW50ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuZG93blBheW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5pbml0aWFsUHJpbmNpcGFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxJbnRlcmVzdCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLnRvdGFsSW50ZXJlc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFRvUGF5ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuaW50ZXJlc3RQbHVzUHJpbmNpcGFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluYWxDb3N0ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuZmluYWxDb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEYXRhQ2FsY3VsYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGN1bGF0ZU5ldygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RhdGFDYWxjdWxhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2FuU3VtbWFyeURhdGEgPSBuZXcgTG9hblN1bW1hcnkoKTtcclxuICAgICAgICB0aGlzLmxvYW5QYXJhbWV0ZXJzID0gbmV3IExvYW5Nb2RlbCgpO1xyXG4gICAgICAgIHRoaXMubW9udGhseVBheW1lbnQgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxUb1BheSA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iXX0=