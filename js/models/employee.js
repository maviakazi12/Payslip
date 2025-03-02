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
  
  generatePayslip() {
    return {
      fullName: this.getFullName(),
      payPeriod: this.getPayPeriod(),
    };
  }
}
export default Employee;
