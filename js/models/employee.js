import { getDayMonth } from "../utils/utilityFunctions.js";

class Employee {
  constructor(
    firstName,
    lastName,
    startDate = null,
    endDate = null,
    payPeriod = null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
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
  generatePayslip() {
    return {
      fullName: this.getFullName(),
      payPeriod: this.getPayPeriod(),
    };
  }
}
export default Employee;
