export function displayPayslip(payslipData){
    payslipOutput.innerHTML = `
    <div>
      <h3>Your Payslip</h3>
      <p>Name: ${payslipData.fullName}</p>
      <p>Pay Period: ${payslipData.payPeriod}</p>
      <p>Gross Income: ${payslipData.grossIncome}</p>
      <p>Income Tax: ${payslipData.incomeTax}</p>
      <p>Net Income: ${payslipData.netIncome}</p>
      <p>Super: ${payslipData.superIncome}</p>
      <p>Thank you for using MYOB! </p>
    </div>
  `;
}