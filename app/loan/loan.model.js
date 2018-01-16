"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoanModel = (function () {
    function LoanModel(interest, downPayment, months, loanAmount) {
        if (interest === void 0) { interest = 3.0; }
        if (downPayment === void 0) { downPayment = 2600; }
        if (months === void 0) { months = 26; }
        if (loanAmount === void 0) { loanAmount = 25000; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYW4ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUVJLG1CQUNXLFFBQW9CLEVBQ3BCLFdBQXdCLEVBQ3hCLE1BQWlCLEVBQ2pCLFVBQXVCO1FBSHZCLHlCQUFBLEVBQUEsY0FBb0I7UUFDcEIsNEJBQUEsRUFBQSxrQkFBd0I7UUFDeEIsdUJBQUEsRUFBQSxXQUFpQjtRQUNqQiwyQkFBQSxFQUFBLGtCQUF1QjtRQUh2QixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtJQUM3QixDQUFDO0lBQ1YsZ0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLDhCQUFTO0FBU3RCO0lBQUE7SUFXRSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBWEgsSUFXRztBQVhVLGtDQUFXO0FBWXRCO0lBQ0UsaUNBQ1csV0FBZ0IsRUFDaEIsV0FBa0IsRUFBUyxZQUFtQixFQUM5QyxjQUFxQixFQUFVLFNBQWdCLEVBQy9DLE9BQWMsRUFDZCxjQUFxQjtRQUpyQixnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBTztRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBQzlDLG1CQUFjLEdBQWQsY0FBYyxDQUFPO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBTztRQUMvQyxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQU87SUFBRSxDQUFDO0lBRXJDLDhCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTG9hbk1vZGVsXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcmVzdDpudW1iZXIgPTMuMCxcclxuICAgICAgICBwdWJsaWMgZG93blBheW1lbnQ6bnVtYmVyID0yNjAwLCBcclxuICAgICAgICBwdWJsaWMgbW9udGhzOm51bWJlciA9MjYsIFxyXG4gICAgICAgIHB1YmxpYyBsb2FuQW1vdW50Om51bWJlcj0yNTAwMClcclxuICAgICAgICB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMb2FuU3VtbWFyeSB7XHJcbiAgICBtb250aGx5UGF5bWVudDogbnVtYmVyO1xyXG4gICAgZG93blBheW1lbnQ6IG51bWJlcjtcclxuICAgIGluaXRpYWxQcmluY2lwYWw6IG51bWJlcjtcclxuICAgIHRvdGFsSW50ZXJlc3Q6IG51bWJlcjtcclxuICAgIGludGVyZXN0UGx1c1ByaW5jaXBhbDogbnVtYmVyO1xyXG4gICAgdG90YWxUb1BheTogbnVtYmVyO1xyXG4gICAgZmluYWxDb3N0OiBudW1iZXI7XHJcbiAgICBhbW9ydGl6YXRpb25UYWJsZT86IChBbW9ydGl6YXRpb25UYWJsZUVudGl0eSlbXSB8IG51bGw7XHJcbiAgICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgdmFsaWRhdGlvbkVycm9ycz86IG51bGw7XHJcbiAgfVxyXG4gIGV4cG9ydCBjbGFzcyBBbW9ydGl6YXRpb25UYWJsZUVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcGF5bWVudERhdGU6RGF0ZSAsIFxyXG4gICAgICAgIHB1YmxpYyBtb250aE51bWJlcjpudW1iZXIsIHB1YmxpYyBpbnRlcmVzdFBhaWQ6bnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgaW50ZXJlc3RUb0RhdGU6bnVtYmVyICwgcHVibGljIHByaW5jaXBhbDpudW1iZXIgLFxyXG4gICAgICAgIHB1YmxpYyBiYWxhbmNlOm51bWJlciwgXHJcbiAgICAgICAgcHVibGljIG1vbnRobHlQYXltZW50Om51bWJlcil7fVxyXG5cclxuICB9XHJcbiAgIl19