import { displayPayslip } from "../views/displayPayslip.js";
import Employee from "../models/employee.js";
import PayslipCalculator from "../models/payslipCalculator.js";

export function getFormData() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  let annualSalary = document.getElementById("annualSalary").value;
  const superRate = document.getElementById("superRate").value;
  const startDate = document.getElementById("paymentStart").value;
  const endDate = document.getElementById("paymentEnd").value;

  return { firstName, lastName, annualSalary, superRate, startDate, endDate };
}

export function handleFormSubmit(event, errorHandling, payslipOutput) {
  event.preventDefault();

  const { firstName, lastName, annualSalary, superRate, startDate, endDate } =
    getFormData();
  const employee = new Employee(
    firstName,
    lastName,
    annualSalary,
    superRate,
    startDate,
    endDate
  );
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
  const payslipData = employee.generatePayslip();
  const grossIncome = PayslipCalculator.calculateGrossIncome(annualSalary);
  const incomeTax = PayslipCalculator.calculateIncomeTax(annualSalary);
  const netIncome = PayslipCalculator.calculateNetIncome(
    grossIncome,
    incomeTax
  );
  const superIncome = PayslipCalculator.calculateSuper(grossIncome, superRate);
  // Display the payslip
  displayPayslip(payslipData, grossIncome, incomeTax, netIncome, superIncome);
}
