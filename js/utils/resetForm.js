export function resetForm (reset, payslipForm, payslipOutput){
    reset.addEventListener("click", function () {
        payslipForm.reset();
        payslipOutput.innerHTML = "";
      });
}