import { getDayMonth } from "../utils/utilityFunctions.js";

class PayslipDisplay {
  static getPayPeriod(startDate, endDate) {
    let formattedStartDate = getDayMonth(startDate);
    let formattedEndDate = getDayMonth(endDate);
    return `${formattedStartDate} - ${formattedEndDate}`;
  }
  static payslipDisplay(
    fullName,
    payPeriod,
    grossIncome,
    incomeTax,
    netIncome,
    superIncome
  ) {
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
export default PayslipDisplay;
