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
            }).catch(function () {
                console.log("weord");
                _this.hasError = false, loader.hide();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUFrRTtBQUNsRSwyQ0FBK0U7QUFDL0Usc0NBQTRGO0FBQzVGLDZEQUF3RDtBQUd4RCx1RUFBK0Q7QUFDL0QsZ0VBQTRFO0FBRTVFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDbEYsSUFBSSxNQUFNLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3BDLElBQUksT0FBTyxHQUFHO0lBQ1YsT0FBTyxFQUFFLGlDQUFpQztJQUMxQyxRQUFRLEVBQUUsSUFBSTtJQUNkLE9BQU8sRUFBRTtRQUNMLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGNBQWMsRUFBRSxVQUFVLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ3RFLEdBQUcsRUFBRSxHQUFHO1FBQ1Isb0JBQW9CLEVBQUUsU0FBUztRQUMvQixxQkFBcUIsRUFBRSxJQUFJO1FBQzNCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLGlCQUFpQixFQUFFLENBQUM7S0FDdkI7Q0FDSixDQUFDO0FBUUY7SUFHSSx1QkFBb0Isa0JBQXNDLEVBQVUsa0JBQXFDLEVBQVUsZUFBaUMsRUFDeEksUUFBNEI7UUFEcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDeEksYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFLakMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsaUJBQVksR0FBbUMsSUFBSSxLQUFLLEVBQTJCLENBQUM7UUFDcEYsbUJBQWMs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LEVBQThCLHdCQUFpQixFQUEyQix1Q0FBZ0I7WUFDOUgsOENBQWtCO09BSi9CLGFBQWEsQ0EyRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vLi4vZGF0YXNvdXJjZS9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2FuTW9kZWwsIExvYW5TdW1tYXJ5LCBBbW9ydGl6YXRpb25UYWJsZUVudGl0eSB9IGZyb20gJy4vbG9hbi5tb2RlbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgUmFkRGF0YUZvcm1Db21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9kYXRhZm9ybS9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcclxudmFyIExvYWRpbmdJbmRpY2F0b3IgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCIpLkxvYWRpbmdJbmRpY2F0b3I7XHJcbnZhciBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG52YXIgb3B0aW9ucyA9IHtcclxuICAgIG1lc3NhZ2U6ICdDYWxjdWxhdGluZyBwYXltZW50IHNjaGVkdWxlLi4uJyxcclxuICAgIHByb2dyZXNzOiAwLjY1LFxyXG4gICAgYW5kcm9pZDoge1xyXG4gICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgcHJvZ3Jlc3NOdW1iZXJGb3JtYXQ6IFwiJTFkLyUyZFwiLFxyXG4gICAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICBwcm9ncmVzc1N0eWxlOiAxLFxyXG4gICAgICAgIHNlY29uZGFyeVByb2dyZXNzOiAxXHJcbiAgICB9XHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvYW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvYW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2FuLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFNYW5hZ2VyU2VydmljZTogRGF0YU1hbmFnZXJTZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkgeyB9XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJteURhdGFGb3JtXCIpIGRhdGFGb3JtQ29tcDogUmFkRGF0YUZvcm1Db21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwicmVzdWx0TGFiZWxcIikgcmVzdWx0TGFiZWw6IEVsZW1lbnRSZWY7XHJcbiAgICBwdWJsaWMgaXNEYXRhQ2FsY3VsYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGhhc0Vycm9yc0xhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaGFzRXJyb3I6IGJvb2xlYW4gPSBudWxsO1xyXG4gICAgcHVibGljIGFtb3J0aXphdGlvbjogQXJyYXk8QW1vcnRpemF0aW9uVGFibGVFbnRpdHk+ID0gbmV3IEFycmF5PEFtb3J0aXphdGlvblRhYmxlRW50aXR5PigpO1xyXG4gICAgcHVibGljIGxvYW5QYXJhbWV0ZXJzOiBMb2FuTW9kZWwgPSBuZXcgTG9hbk1vZGVsKCk7XHJcbiAgICBwdWJsaWMgbG9hblN1bW1hcnlEYXRhOiBMb2FuU3VtbWFyeSA9IG5ldyBMb2FuU3VtbWFyeSgpO1xyXG4gICAgcHVibGljIG1vbnRobHlQYXltZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGRvd25QYXltZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHByaW5jaXBhbDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB0b3RhbEludGVyZXN0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRvdGFsVG9QYXk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZmluYWxDb3N0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V0RGF0YSgpIHtcclxuICAgICAgICB2YXIgaGFzRXJyb3JzID0gdGhpcy5kYXRhRm9ybUNvbXAuZGF0YUZvcm0uaGFzVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgICAgIGlmICghaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPWZhbHNlO1xyXG4gICAgICAgICAgICBsb2FkZXIuc2hvdyhvcHRpb25zKTsgLy8gb3B0aW9ucyBpcyBvcHRpb25hbFxyXG4gICAgICAgICAgICB0aGlzLmRhdGFNYW5hZ2VyU2VydmljZS5HZXRMb2FuU3VtbWFyeURhdGEodGhpcy5sb2FuUGFyYW1ldGVycylcclxuXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYW5TdW1tYXJ5RGF0YSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW1vcnRpemF0aW9uID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuYW1vcnRpemF0aW9uVGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aGx5UGF5bWVudCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLm1vbnRobHlQYXltZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG93blBheW1lbnQgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5kb3duUGF5bWVudDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW5jaXBhbCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmluaXRpYWxQcmluY2lwYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbEludGVyZXN0ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEudG90YWxJbnRlcmVzdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVG9QYXkgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5pbnRlcmVzdFBsdXNQcmluY2lwYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbENvc3QgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5maW5hbENvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RhdGFDYWxjdWxhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlb3JkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPWZhbHNlLCBsb2FkZXIuaGlkZSgpfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsY3VsYXRlTmV3KCkge1xyXG5cclxuICAgICAgICB0aGlzLmlzRGF0YUNhbGN1bGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvYW5TdW1tYXJ5RGF0YSA9IG5ldyBMb2FuU3VtbWFyeSgpO1xyXG4gICAgICAgIHRoaXMubG9hblBhcmFtZXRlcnMgPSBuZXcgTG9hbk1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5tb250aGx5UGF5bWVudCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbFRvUGF5ID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ==