import { errorHandling } from "./utils/errors.js";
import { resetForm } from "./utils/resetForm.js";
import { handleFormSubmit } from "./utils/formHandler.js";
import { processCsv } from "./utils/csvProcessing.js";

const payslipForm = document.getElementById("payslipForm");
const payslipOutput = document.getElementById("payslipOutput");
const reset = document.getElementById("resetButton");

payslipForm.addEventListener("submit", function (event) {
  handleFormSubmit(event, errorHandling, payslipOutput);
});

resetForm(reset, payslipForm, payslipOutput);
processCsv(payslipOutput);
