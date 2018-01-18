import { DataManagerService } from './../datasource/data.service';
import { LoanModel, LoanSummary, AmortizationTableEntity } from './loan.model';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { Router, NavigationExtras } from "@angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { RadDataFormComponent } from "nativescript-pro-ui/dataform/angular";
import { Label } from "tns-core-modules/ui/label";
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
var loader = new LoadingIndicator();
var options = {
    message: 'Getting Loan Details...',
    progress: 0.65,
    android: {
        indeterminate: true,
        cancelable: true,
        cancelListener: function (dialog) { console.log("Loading cancelled") },
        max: 100,
        progressNumberFormat: "%1d/%2d",
        progressPercentFormat: 0.53,
        progressStyle: 1,
        secondaryProgress: 1
    }
};

@Component({
    selector: "Loan",
    moduleId: module.id,
    templateUrl: "./loan.component.html",
    styleUrls: ["./loan.component.css"]
})
export class LoanComponent implements OnInit {


    constructor(private dataManagerService: DataManagerService, private changeDetectionRef: ChangeDetectorRef, private routerExtension: RouterExtensions,
        private fonticon: TNSFontIconService) { }
    ngOnInit(): void { }

    @ViewChild("myDataForm") dataFormComp: RadDataFormComponent;
    @ViewChild("resultLabel") resultLabel: ElementRef;
    public isDataCalculated: boolean = false;
    public hasErrorsLabel: string;
    public hasError: boolean = null;
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
        var hasErrors = this.dataFormComp.dataForm.hasValidationErrors();
        if (hasErrors != true) {
            this.hasError = false;
            loader.show(options); // options is optional
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
                    this.isDataCalculated = true;
                    loader.hide();
                });
        };
    }

    public calculateNew() {

        this.isDataCalculated = false;
        this.loanSummaryData = new LoanSummary();
        this.loanParameters = new LoanModel();
        this.monthlyPayment = 0;
        this.totalToPay = 0;

    }



}

