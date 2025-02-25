import * as PayslipCalculator from "./utilityFunctions.js";

export function processCsv (payslipOutput){
    document
  .getElementById("csvInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();

      // Define what happens once the file is read
      reader.onload = function (e) {
        const content = e.target.result;
        const rows = content.split("\n");

        // Create a table to display CSV data
        let cols = [];
        for (let i = 1; i < rows.length - 1; i++) {
          cols.push(rows[i].split(","));
        }
        let payTable = "<br><br><h2>CSV OUTPUT</h2><table border='2'><tr><th>Name</th><th>Pay Period</th><th>Gross Income</th><th>Income Tax</th><th>Net Income</th><th>Super</th></tr>";

        for (let i = 0; i < cols.length; i++) {
          payTable += "<tr><td>";
          payTable += cols[i][0] + " " + cols[i][1];
          payTable += "</td><td>";
          payTable += cols[i][4];
          payTable += "</td><td>";
          payTable += PayslipCalculator.calculateGrossIncome(cols[i][2]);
          payTable += "</td><td>";
          payTable += PayslipCalculator.calculateIncomeTax(cols[i][2]);
          payTable += "</td><td>";
          payTable += PayslipCalculator.calculateNetIncome(
            PayslipCalculator.calculateGrossIncome(cols[i][2]),
            PayslipCalculator.calculateIncomeTax(cols[i][2])
          );
          payTable += "</td><td>";
          payTable += PayslipCalculator.calculateSuper(
            PayslipCalculator.calculateGrossIncome(cols[i][2]),
            parseInt(cols[i][3])
          );
          payTable += "</td>";
        }
        payTable += "</table>";
        payslipOutput.innerHTML = payTable;
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  });
}