"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoanModel = (function () {
    function LoanModel(interest, downPayment, months, loanAmount) {
        if (interest === void 0) { interest = 3.5; }
        if (downPayment === void 0) { downPayment = 1; }
        if (months === void 0) { months = 26; }
        if (loanAmount === void 0) { loanAmount = 0; }
        this.interest = interest;
        this.downPayment = downPayment;
        this.months = months;
        this.loanAmount = loanAmount;
    }
    return LoanModel;
}());
exports.LoanModel = LoanModel;
var LoanSummary = (function () {
    function LoanSummary() {
    }
    return LoanSummary;
}());
exports.LoanSummary = LoanSummary;
var AmortizationTableEntity = (function () {
    function AmortizationTableEntity(paymentDate, monthNumber, interestPaid, interestToDate, principal, balance, monthlyPayment) {
        this.paymentDate = paymentDate;
        this.monthNumber = monthNumber;
        this.interestPaid = interestPaid;
        this.interestToDate = interestToDate;
        this.principal = principal;
        this.balance = balance;
        this.monthlyPayment = monthlyPayment;
    }
    return AmortizationTableEntity;
}());
exports.AmortizationTableEntity = AmortizationTableEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYW4ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUVJLG1CQUNXLFFBQW9CLEVBQ3BCLFdBQXFCLEVBQ3JCLE1BQWlCLEVBQ2pCLFVBQW1CO1FBSG5CLHlCQUFBLEVBQUEsY0FBb0I7UUFDcEIsNEJBQUEsRUFBQSxlQUFxQjtRQUNyQix1QkFBQSxFQUFBLFdBQWlCO1FBQ2pCLDJCQUFBLEVBQUEsY0FBbUI7UUFIbkIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNwQixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVM7SUFDekIsQ0FBQztJQUNWLGdCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSw4QkFBUztBQVN0QjtJQUFBO0lBV0UsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQVhILElBV0c7QUFYVSxrQ0FBVztBQVl0QjtJQUNFLGlDQUNXLFdBQWdCLEVBQ2hCLFdBQWtCLEVBQVMsWUFBbUIsRUFDOUMsY0FBcUIsRUFBVSxTQUFnQixFQUMvQyxPQUFjLEVBQ2QsY0FBcUI7UUFKckIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQU87UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBTztRQUM5QyxtQkFBYyxHQUFkLGNBQWMsQ0FBTztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQU87UUFDL0MsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFPO0lBQUUsQ0FBQztJQUVyQyw4QkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvYW5Nb2RlbFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaW50ZXJlc3Q6bnVtYmVyID0zLjUsXHJcbiAgICAgICAgcHVibGljIGRvd25QYXltZW50Om51bWJlciA9MSwgXHJcbiAgICAgICAgcHVibGljIG1vbnRoczpudW1iZXIgPTI2LCBcclxuICAgICAgICBwdWJsaWMgbG9hbkFtb3VudDpudW1iZXI9MClcclxuICAgICAgICB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMb2FuU3VtbWFyeSB7XHJcbiAgICBtb250aGx5UGF5bWVudDogbnVtYmVyO1xyXG4gICAgZG93blBheW1lbnQ6IG51bWJlcjtcclxuICAgIGluaXRpYWxQcmluY2lwYWw6IG51bWJlcjtcclxuICAgIHRvdGFsSW50ZXJlc3Q6IG51bWJlcjtcclxuICAgIGludGVyZXN0UGx1c1ByaW5jaXBhbDogbnVtYmVyO1xyXG4gICAgdG90YWxUb1BheTogbnVtYmVyO1xyXG4gICAgZmluYWxDb3N0OiBudW1iZXI7XHJcbiAgICBhbW9ydGl6YXRpb25UYWJsZT86IChBbW9ydGl6YXRpb25UYWJsZUVudGl0eSlbXSB8IG51bGw7XHJcbiAgICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgdmFsaWRhdGlvbkVycm9ycz86IG51bGw7XHJcbiAgfVxyXG4gIGV4cG9ydCBjbGFzcyBBbW9ydGl6YXRpb25UYWJsZUVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcGF5bWVudERhdGU6RGF0ZSAsIFxyXG4gICAgICAgIHB1YmxpYyBtb250aE51bWJlcjpudW1iZXIsIHB1YmxpYyBpbnRlcmVzdFBhaWQ6bnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgaW50ZXJlc3RUb0RhdGU6bnVtYmVyICwgcHVibGljIHByaW5jaXBhbDpudW1iZXIgLFxyXG4gICAgICAgIHB1YmxpYyBiYWxhbmNlOm51bWJlciwgXHJcbiAgICAgICAgcHVibGljIG1vbnRobHlQYXltZW50Om51bWJlcil7fVxyXG5cclxuICB9XHJcbiAgIl19