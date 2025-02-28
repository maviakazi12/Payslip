import PayslipCalculator from "./payslipCalculator.js";

class DisplayPayslip{
    static displayPayslip(employee){
        const fullName = employee.getFullName();
        const payPeriod = employee.getPayPeriod()
        const grossIncome = PayslipCalculator.calculateGrossIncome(employee.annualSalary);
        const incomeTax = PayslipCalculator.calculateIncomeTax(employee.annualSalary);
        const netIncome = PayslipCalculator.calculateNetIncome(
    grossIncome,
    incomeTax
  );
  const superIncome = PayslipCalculator.calculateSuper(grossIncome, superRate);

        payslipOutput.innerHTML = `
    <div>
      <h3>Your Payslip</h3>
      <p>Name: ${fullName}</p>
      <p>Pay Period: ${payPeriod}</p>
      <p>Gross Income: ${grossIncome}</p>
      <p>Income Tax: ${incomeTax}</p>
      <p>Net Income: ${netIncome}</p>
      <p>Super: ${superIncome}</p>
      <p>Thank you for using MYOB! </p>
    </div>
  `;
    }
}
export default DisplayPayslip