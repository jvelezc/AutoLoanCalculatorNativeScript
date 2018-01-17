import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { LoanModel, LoanSummary, AmortizationTableEntity } from './../loan/loan.model';
import { Injectable, OnInit } from "@angular/core";
import { Http, Headers, Response, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
@Injectable()
export class DataManagerService {

    constructor(public http: Http) {}
    public sharedLoanSummary:LoanSummary = new LoanSummary();
  
    public GetLoanSummaryData(loanModel: LoanModel):Promise<LoanSummary> {
        let loanSummaryData = new LoanSummary();
        let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");        
        return  this.http.post("http://loancalculatornativoplus.azurewebsites.net/api/v1.0/LoanCalculator", loanModel, { headers: myHeader })
            .toPromise().then(data => {
                loanSummaryData = <LoanSummary>data.json();
                this.sharedLoanSummary = loanSummaryData;
                return loanSummaryData;
            },);

    }
}