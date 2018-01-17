import { LoanSummary, AmortizationTableEntity } from './../loan.model';
import { LoanComponent } from './../../../platforms/android/app/build/intermediates/assets/F0/debug/app/loan/loan.component';
import { DataManagerService } from './../../datasource/data.service';
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { Router, NavigationExtras } from "@angular/router";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { ObservableArray } from "tns-core-modules/data/observable-array";


@Component({
	selector: "LoanDetails",
	moduleId: module.id,
	templateUrl: "./loan-details.component.html"
})


export class LoanDetailsComponent implements OnInit {
	public amortization: Array<AmortizationTableEntity> = new Array<AmortizationTableEntity>();
	public monthlyPayment: number = 0;
    public downPayment: number = 0;
    public principal: number = 0;
    public totalInterest: number = 0;
    public totalToPay: number = 0;
    public finalCost: number = 0;
	constructor(private dataManagerService: DataManagerService,private routerExtension: RouterExtensions) { }
	ngOnInit(): void { 
		console.log(this.dataManagerService.sharedLoanSummary);

                
		this.amortization = this.dataManagerService.sharedLoanSummary.amortizationTable;
		this.monthlyPayment = this.dataManagerService.sharedLoanSummary.monthlyPayment;
		this.downPayment = this.dataManagerService.sharedLoanSummary.downPayment;
		this.principal = this.dataManagerService.sharedLoanSummary.initialPrincipal;
		this.totalInterest = this.dataManagerService.sharedLoanSummary.totalInterest;
		this.totalToPay = this.dataManagerService.sharedLoanSummary.interestPlusPrincipal;
		this.finalCost = this.dataManagerService.sharedLoanSummary.finalCost;

	}
	back(){
		this.routerExtension.back();
	}

}
