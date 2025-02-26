
export function displayPayslip(payslipData,grossIncome,incomeTax,netIncome,superIncome){
    payslipOutput.innerHTML = `
    <div>
      <h3>Your Payslip</h3>
      <p>Name: ${payslipData.fullName}</p>
      <p>Pay Period: ${payslipData.payPeriod}</p>
      <p>Gross Income: ${grossIncome}</p>
      <p>Income Tax: ${incomeTax}</p>
      <p>Net Income: ${netIncome}</p>
      <p>Super: ${superIncome}</p>
      <p>Thank you for using MYOB! </p>
    </div>
  `;
}