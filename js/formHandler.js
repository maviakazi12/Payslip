import { displayPayslip } from "./displayPayslip.js";

export function getFormData(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    let annualSalary = document.getElementById("annualSalary").value;
    const superRate = document.getElementById("superRate").value;
    const startDate = document.getElementById("paymentStart").value;
    const endDate = document.getElementById("paymentEnd").value;
    
    return { firstName, lastName, annualSalary, superRate, startDate, endDate }
}



export function handleFormSubmit (event, PayslipCalculator, errorHandling, payslipOutput){
        event.preventDefault();
      
        //declare variables and get user input values
        const { firstName, lastName, annualSalary, superRate, startDate, endDate } =
          getFormData();
        const errors = errorHandling(
          firstName,
          lastName,
          annualSalary,
          superRate,
          startDate,
          endDate
        );
      
        if (errors.length > 0) {
          payslipOutput.innerHTML = `<p style="color:red;">${errors.join(
            "<br>"
          )}</p>`;
          return;
        }
      
        // execute all functions to process the data
        let fullName = PayslipCalculator.getFullName(firstName, lastName);
        let payPeriod = PayslipCalculator.getPayPeriod(startDate, endDate);
        let grossIncome = PayslipCalculator.calculateGrossIncome(annualSalary);
        let incomeTax = PayslipCalculator.calculateIncomeTax(annualSalary);
        let netIncome = PayslipCalculator.calculateNetIncome(grossIncome, incomeTax);
        let superIncome = PayslipCalculator.calculateSuper(grossIncome, superRate);
      
        // Display the payslip
        displayPayslip(
          fullName,
          payPeriod,
          grossIncome,
          incomeTax,
          netIncome,
          superIncome,
          payslipOutput
        );
}