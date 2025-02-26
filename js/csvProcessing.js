import Employee from "./employee.js";
import { displayPayslip } from "./displayPayslip.js";

export function processCsv(payslipOutput) {
  document
    .getElementById("csvInput")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file && file.type === "text/csv") {
        const reader = new FileReader();
        console.log(file);
        // Define what happens once the file is read
        reader.onload = function (e) {
          const content = e.target.result;
          const rows = content.split("\n");

          // Create a table to display CSV data
          let cols = [];
          for (let i = 1; i < rows.length - 1; i++) {
            cols.push(rows[i].split(","));
          }
          // let payTable = "<br><br><h2>CSV OUTPUT</h2><table border='2'><tr><th>Name</th><th>Pay Period</th><th>Gross Income</th><th>Income Tax</th><th>Net Income</th><th>Super</th></tr>";
          for (let i = 0; i < cols.length; i++) {
            const firstName = cols[i][0];
            const lastName = cols[i][1];
            const annualSalary = cols[i][2];
            const superRate = parseInt(cols[i][3]);
            const payPeriod = cols[i][4].split(" – ");
            const startDate = payPeriod[0].trim();
            const endDate = payPeriod[1].trim();

            const employee = new Employee(
              firstName,
              lastName,
              annualSalary,
              superRate,
              startDate,
              endDate
            );
            const payslipData = employee.generatePayslip();
            displayPayslip(payslipData);
          }
        };
        reader.readAsText(file);
      } else {
        alert("Please upload a valid CSV file.");
      }
    });
}
