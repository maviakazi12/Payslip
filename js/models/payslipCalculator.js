import { getDayMonth } from "../utils/utilityFunctions.js";

class PayslipCalculator{
    static calculateGrossIncome(annualSalary) {
        let monthlyGrossIncome = Math.floor(annualSalary / 12);
        return monthlyGrossIncome;
    }
    static calculateIncomeTax(annualSalary) {
        let incomeTax;
        if (18200 <= annualSalary && annualSalary <= 37000) {
          incomeTax = Math.ceil(((annualSalary - 18200) * 0.19) / 12);
        } else if (37001 <= annualSalary && annualSalary <= 87000) {
          incomeTax = Math.ceil((3572 + (annualSalary - 37000) * 0.325) / 12);
        } else if (87001 <= annualSalary && annualSalary < 180000) {
          incomeTax = Math.ceil((19822 + (annualSalary - 87000) * 0.37) / 12);
        } else if (annualSalary >= 180001) {
          incomeTax = Math.ceil((54232 + (annualSalary - 180000) * 0.45) / 12);
        } else {
        incomeTax = "No Income Tax Applicable";
        }
        return incomeTax;
    }
    static calculateNetIncome(grossIncome, incomeTax) {
        let netIncome;
        if (grossIncome <= 18200) {
        netIncome = grossIncome;
        }
        netIncome = grossIncome - incomeTax;
    return netIncome;
    }
    static calculateSuper(grossIncome, superRate) {
        let superIncome = Math.floor(
          (grossIncome * superRate) / 100
        );
        return superIncome;
    }
    static getFullName(firstName, lastName) {
      return `${firstName} ${lastName}`;
    }
    static getPayPeriod(startDate,
      endDate) {
      
      let formattedStartDate = getDayMonth(startDate);
      let formattedEndDate = getDayMonth(endDate);
      return `${formattedStartDate} - ${formattedEndDate}`;
    }
}
export default PayslipCalculator;