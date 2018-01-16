export class LoanModel
{
    constructor(
        public interest:number =3.0,
        public downPayment:number =2600, 
        public months:number =26, 
        public loanAmount:number=25000)
        {}
}
export class LoanSummary {
    monthlyPayment: number;
    downPayment: number;
    initialPrincipal: number;
    totalInterest: number;
    interestPlusPrincipal: number;
    totalToPay: number;
    finalCost: number;
    amortizationTable?: (AmortizationTableEntity)[] | null;
    isValid: boolean;
    validationErrors?: null;
  }
  export class AmortizationTableEntity {
    constructor(
        public paymentDate:Date , 
        public monthNumber:number, public interestPaid:number, 
        public interestToDate:number , public principal:number ,
        public balance:number, 
        public monthlyPayment:number){}

  }
  