import * as PayslipCalculator from "./utilityFunctions.js";
import { errorHandling } from "./errors.js";
import { resetForm } from "./resetForm.js";
import { handleFormSubmit } from "./formHandler.js";
import { processCsv } from "./csvProcessing.js";

const payslipForm = document.getElementById("payslipForm");
const payslipOutput = document.getElementById("payslipOutput");
const reset = document.getElementById("resetButton");

payslipForm.addEventListener("submit", function (event) {
  handleFormSubmit(event, errorHandling, payslipOutput);
});

resetForm(reset, payslipForm, payslipOutput);
processCsv(payslipOutput);