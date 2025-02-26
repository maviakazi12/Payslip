import { getDayMonth } from "./utilityFunctions.js";

class Employee {
  constructor(
    firstName,
    lastName,
    annualSalary,
    superRate,
    startDate = null,
    endDate = null,
    payPeriod = null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.annualSalary = annualSalary;
    this.superRate = superRate;
    this.startDate = startDate;
    this.endDate = endDate;
    this.payPeriod = payPeriod;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getPayPeriod() {
    if (this.payPeriod) {
      return this.payPeriod;
    }
    let formattedStartDate = getDayMonth(this.startDate);
    let formattedEndDate = getDayMonth(this.endDate);
    return `${formattedStartDate} - ${formattedEndDate}`;
  }
  calculateGrossIncome() {
    let monthlyGrossIncome = Math.floor(this.annualSalary / 12);
    return monthlyGrossIncome;
  }
  calculateIncomeTax() {
    let incomeTax;
    if (18200 <= this.annualSalary && this.annualSalary <= 37000) {
      incomeTax = Math.ceil(((annualSalary - 18200) * 0.19) / 12);
    } else if (37001 <= this.annualSalary && this.annualSalary <= 87000) {
      incomeTax = Math.ceil((3572 + (this.annualSalary - 37000) * 0.325) / 12);
    } else if (87001 <= this.annualSalary && this.annualSalary < 180000) {
      incomeTax = Math.ceil((19822 + (this.annualSalary - 87000) * 0.37) / 12);
    } else if (this.annualSalary >= 180001) {
      incomeTax = Math.ceil((54232 + (this.annualSalary - 180000) * 0.45) / 12);
    } else {
      incomeTax = "No Income Tax Applicable";
    }
    return incomeTax;
  }
  calculateNetIncome() {
    let netIncome;
    if (this.calculateGrossIncome() <= 18200) {
      netIncome = this.calculateGrossIncome();
    }

    netIncome = this.calculateGrossIncome() - this.calculateIncomeTax();
    return netIncome;
  }
  calculateSuper() {
    let superIncome = Math.floor(
      (this.calculateGrossIncome() * this.superRate) / 100
    );
    return superIncome;
  }
  generatePayslip() {
    return {
      fullName: this.getFullName(),
      payPeriod: this.getPayPeriod(),
      grossIncome: this.calculateGrossIncome(),
      incomeTax: this.calculateIncomeTax(),
      netIncome: this.calculateNetIncome(),
      superIncome: this.calculateSuper(),
    };
  }
}
export default Employee;
