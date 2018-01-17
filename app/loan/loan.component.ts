import { DataManagerService } from './../datasource/data.service';
import { LoanModel, LoanSummary, AmortizationTableEntity } from './loan.model';
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { Router, NavigationExtras } from "@angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    selector: "Loan",
    moduleId: module.id,
    templateUrl: "./loan.component.html"
})
export class LoanComponent implements OnInit {

  
    constructor(private dataManagerService: DataManagerService, private changeDetectionRef: ChangeDetectorRef,private routerExtension: RouterExtensions) 
    {}
    ngOnInit(): void {}

    public amortization: Array<AmortizationTableEntity> = new Array<AmortizationTableEntity>();
    public loanParameters: LoanModel = new LoanModel();
    public loanSummaryData: LoanSummary = new LoanSummary();
    public monthlyPayment: number = 0;
    public downPayment: number = 0;
    public principal: number = 0;
    public totalInterest: number = 0;
    public totalToPay: number = 0;
    public finalCost: number = 0;
    public tabSelectedIndex: number = 0;
    public getData() {
     
        this.dataManagerService.GetLoanSummaryData(this.loanParameters)
            .then(data => {
                this.loanSummaryData = data;
                
                this.amortization = this.loanSummaryData.amortizationTable;
                this.monthlyPayment = this.loanSummaryData.monthlyPayment;
                this.downPayment = this.loanSummaryData.downPayment;
                this.principal = this.loanSummaryData.initialPrincipal;
                this.totalInterest = this.loanSummaryData.totalInterest;
                this.totalToPay = this.loanSummaryData.interestPlusPrincipal;
                this.finalCost = this.loanSummaryData.finalCost;
                this.routerExtension
                .navigate(["/loan/loandetails"], {
                    transition: {
                        name: "slideLeft"
                    }
                }); 
               
            });
          
    }

  

}

