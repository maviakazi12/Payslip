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
  
}
export default Employee;
