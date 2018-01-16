"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_service_1 = require("./../datasource/data.service");
var loan_model_1 = require("./loan.model");
var core_1 = require("@angular/core");
var LoanComponent = (function () {
    function LoanComponent(dataManagerService, changeDetectionRef) {
        this.dataManagerService = dataManagerService;
        this.changeDetectionRef = changeDetectionRef;
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
    LoanComponent.prototype.ngOnInit = function () {
    };
    LoanComponent.prototype.getData = function () {
        var _this = this;
        console.dir(this.loanParameters);
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
        });
        ;
    };
    LoanComponent.prototype.onIndexChanged = function (args) {
        var tabView = args.object;
        this.changeDetectionRef.detectChanges();
    };
    LoanComponent = __decorate([
        core_1.Component({
            selector: "Loan",
            moduleId: module.id,
            templateUrl: "./loan.component.html"
        }),
        __metadata("design:paramtypes", [data_service_1.DataManagerService, core_1.ChangeDetectorRef])
    ], LoanComponent);
    return LoanComponent;
}());
exports.LoanComponent = LoanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUFrRTtBQUNsRSwyQ0FBK0U7QUFDL0Usc0NBQXFFO0FBV3JFO0lBR0ksdUJBQW9CLGtCQUFzQyxFQUFVLGtCQUFxQztRQUFyRix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQVVsRyxpQkFBWSxHQUFtQyxJQUFJLEtBQUssRUFBMkIsQ0FBQztRQUNwRixtQkFBYyxHQUFjLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQzVDLG9CQUFlLEdBQWdCLElBQUksd0JBQVcsRUFBRSxDQUFDO1FBQ2pELG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztJQWhCcEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFHQSxDQUFDO0lBWU0sK0JBQU8sR0FBZDtRQUFBLGlCQWlCQztRQWZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQzFELElBQUksQ0FBQyxVQUFBLElBQUk7WUFDTixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUU1QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7WUFDM0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQztZQUMxRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN2RCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1lBQ3hELEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztZQUM3RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBRXBELENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQztJQUNaLENBQUM7SUFFTSxzQ0FBYyxHQUFyQixVQUFzQixJQUFJO1FBQ3RCLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRTVDLENBQUM7SUE5Q1EsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FJMEMsaUNBQWtCLEVBQThCLHdCQUFpQjtPQUhoRyxhQUFhLENBZ0R6QjtJQUFELG9CQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLy4uL2RhdGFzb3VyY2UvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IExvYW5Nb2RlbCwgTG9hblN1bW1hcnksIEFtb3J0aXphdGlvblRhYmxlRW50aXR5IH0gZnJvbSAnLi9sb2FuLm1vZGVsJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2FuXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvYW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBMb2FuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFNYW5hZ2VyU2VydmljZTogRGF0YU1hbmFnZXJTZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgIFxuICAgIFxuICAgIH1cbiAgIFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICBcbiAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBhbW9ydGl6YXRpb246IEFycmF5PEFtb3J0aXphdGlvblRhYmxlRW50aXR5PiA9IG5ldyBBcnJheTxBbW9ydGl6YXRpb25UYWJsZUVudGl0eT4oKTtcbiAgICBwdWJsaWMgbG9hblBhcmFtZXRlcnM6IExvYW5Nb2RlbCA9IG5ldyBMb2FuTW9kZWwoKTtcbiAgICBwdWJsaWMgbG9hblN1bW1hcnlEYXRhOiBMb2FuU3VtbWFyeSA9IG5ldyBMb2FuU3VtbWFyeSgpO1xuICAgIHB1YmxpYyBtb250aGx5UGF5bWVudDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZG93blBheW1lbnQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHByaW5jaXBhbDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgdG90YWxJbnRlcmVzdDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgdG90YWxUb1BheTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZmluYWxDb3N0OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnZXREYXRhKCkge1xuXG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMubG9hblBhcmFtZXRlcnMpO1xuICAgICBcbiAgICAgICAgdGhpcy5kYXRhTWFuYWdlclNlcnZpY2UuR2V0TG9hblN1bW1hcnlEYXRhKHRoaXMubG9hblBhcmFtZXRlcnMpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYW5TdW1tYXJ5RGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5hbW9ydGl6YXRpb24gPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS5hbW9ydGl6YXRpb25UYWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRobHlQYXltZW50ID0gdGhpcy5sb2FuU3VtbWFyeURhdGEubW9udGhseVBheW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5kb3duUGF5bWVudCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmRvd25QYXltZW50O1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbmNpcGFsID0gdGhpcy5sb2FuU3VtbWFyeURhdGEuaW5pdGlhbFByaW5jaXBhbDtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsSW50ZXJlc3QgPSB0aGlzLmxvYW5TdW1tYXJ5RGF0YS50b3RhbEludGVyZXN0O1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxUb1BheSA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmludGVyZXN0UGx1c1ByaW5jaXBhbDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmFsQ29zdCA9IHRoaXMubG9hblN1bW1hcnlEYXRhLmZpbmFsQ29zdDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pOztcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbmRleENoYW5nZWQoYXJncykge1xuICAgICAgICBsZXQgdGFiVmlldyA9IDxUYWJWaWV3PmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB9XG5cbn1cblxuIl19