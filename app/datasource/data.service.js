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
    }
    DataManagerService.prototype.GetLoanSummaryData = function (loanModel) {
        var loanSummaryData = new loan_model_1.LoanSummary();
        var myHeader = new http_1.Headers();
        myHeader.append("Content-Type", "application/json");
        return this.http.post("http://loancalculatornativoplus.azurewebsites.net/api/v1.0/LoanCalculator", loanModel, { headers: myHeader })
            .toPromise().then(function (data) {
            loanSummaryData = data.json();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUNBQWlDO0FBQ2pDLG1EQUF1RjtBQUN2RixzQ0FBbUQ7QUFDbkQsc0NBQXlGO0FBRXpGLGlDQUErQjtBQUUvQjtJQUVJLDRCQUFtQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFHMUIsK0NBQWtCLEdBQXpCLFVBQTBCLFNBQW9CO1FBQzFDLElBQUksZUFBZSxHQUFHLElBQUksd0JBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksUUFBUSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkVBQTJFLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQ2hJLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDbEIsZUFBZSxHQUFnQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMzQixDQUFDLENBQUUsQ0FBQztJQUVaLENBQUM7SUFmUSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTt5Q0FHZ0IsV0FBSTtPQUZwQixrQkFBa0IsQ0FnQjlCO0lBQUQseUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgeyBMb2FuTW9kZWwsIExvYW5TdW1tYXJ5LCBBbW9ydGl6YXRpb25UYWJsZUVudGl0eSB9IGZyb20gJy4vLi4vbG9hbi9sb2FuLm1vZGVsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhTWFuYWdlclNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7fVxyXG5cclxuICBcclxuICAgIHB1YmxpYyBHZXRMb2FuU3VtbWFyeURhdGEobG9hbk1vZGVsOiBMb2FuTW9kZWwpOlByb21pc2U8TG9hblN1bW1hcnk+IHtcclxuICAgICAgICBsZXQgbG9hblN1bW1hcnlEYXRhID0gbmV3IExvYW5TdW1tYXJ5KCk7XHJcbiAgICAgICAgbGV0IG15SGVhZGVyID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBteUhlYWRlci5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpOyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9sb2FuY2FsY3VsYXRvcm5hdGl2b3BsdXMuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL3YxLjAvTG9hbkNhbGN1bGF0b3JcIiwgbG9hbk1vZGVsLCB7IGhlYWRlcnM6IG15SGVhZGVyIH0pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9hblN1bW1hcnlEYXRhID0gPExvYW5TdW1tYXJ5PmRhdGEuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYW5TdW1tYXJ5RGF0YTtcclxuICAgICAgICAgICAgfSwpO1xyXG5cclxuICAgIH1cclxufSJdfQ==