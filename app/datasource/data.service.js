"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/catch");
var loan_model_1 = require("./../loan/loan.model");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DataManagerService = (function () {
    function DataManagerService(http) {
        this.http = http;
        this.sharedLoanSummary = new loan_model_1.LoanSummary();
    }
    DataManagerService.prototype.GetLoanSummaryData = function (loanModel) {
        var _this = this;
        var loanSummaryData = new loan_model_1.LoanSummary();
        var myHeader = new http_1.Headers();
        myHeader.append("Content-Type", "application/json");
        return this.http.post("http://loancalculatornativoplus.azurewebsites.net/api/v1.0/LoanCalculator", loanModel, { headers: myHeader })
            .toPromise().then(function (data) {
            loanSummaryData = data.json();
            _this.sharedLoanSummary = loanSummaryData;
            return loanSummaryData;
        });
    };
    DataManagerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataManagerService);
    return DataManagerService;
}());
exports.DataManagerService = DataManagerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUNBQWlDO0FBQ2pDLG1EQUF1RjtBQUN2RixzQ0FBbUQ7QUFDbkQsc0NBQXlGO0FBRXpGLGlDQUErQjtBQUUvQjtJQUVJLDRCQUFtQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUN0QixzQkFBaUIsR0FBZSxJQUFJLHdCQUFXLEVBQUUsQ0FBQztJQUR6QixDQUFDO0lBRzFCLCtDQUFrQixHQUF6QixVQUEwQixTQUFvQjtRQUE5QyxpQkFXQztRQVZHLElBQUksZUFBZSxHQUFHLElBQUksd0JBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksUUFBUSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkVBQTJFLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQ2hJLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDbEIsZUFBZSxHQUFnQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsS0FBSSxDQUFDLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztZQUN6QyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzNCLENBQUMsQ0FBRSxDQUFDO0lBRVosQ0FBQztJQWhCUSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTt5Q0FHZ0IsV0FBSTtPQUZwQixrQkFBa0IsQ0FpQjlCO0lBQUQseUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgeyBMb2FuTW9kZWwsIExvYW5TdW1tYXJ5LCBBbW9ydGl6YXRpb25UYWJsZUVudGl0eSB9IGZyb20gJy4vLi4vbG9hbi9sb2FuLm1vZGVsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhTWFuYWdlclNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7fVxyXG4gICAgcHVibGljIHNoYXJlZExvYW5TdW1tYXJ5OkxvYW5TdW1tYXJ5ID0gbmV3IExvYW5TdW1tYXJ5KCk7XHJcbiAgXHJcbiAgICBwdWJsaWMgR2V0TG9hblN1bW1hcnlEYXRhKGxvYW5Nb2RlbDogTG9hbk1vZGVsKTpQcm9taXNlPExvYW5TdW1tYXJ5PiB7XHJcbiAgICAgICAgbGV0IGxvYW5TdW1tYXJ5RGF0YSA9IG5ldyBMb2FuU3VtbWFyeSgpO1xyXG4gICAgICAgIGxldCBteUhlYWRlciA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgbXlIZWFkZXIuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vbG9hbmNhbGN1bGF0b3JuYXRpdm9wbHVzLmF6dXJld2Vic2l0ZXMubmV0L2FwaS92MS4wL0xvYW5DYWxjdWxhdG9yXCIsIGxvYW5Nb2RlbCwgeyBoZWFkZXJzOiBteUhlYWRlciB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGxvYW5TdW1tYXJ5RGF0YSA9IDxMb2FuU3VtbWFyeT5kYXRhLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkTG9hblN1bW1hcnkgPSBsb2FuU3VtbWFyeURhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hblN1bW1hcnlEYXRhO1xyXG4gICAgICAgICAgICB9LCk7XHJcblxyXG4gICAgfVxyXG59Il19