export function getDayMonth(date) {
    //convert string into date object
    let dateObj = new Date(date);
    //extract the date from date object
    let day = dateObj.getDate();
    //extract month and convert it into full month name
    let month = dateObj.toLocaleString("default", { month: "long" });
    return `${day} ${month}`;
  }
  
export function getPayPeriod(startDate, endDate) {
    let formattedStartDate = getDayMonth(startDate);
    let formattedEndDate = getDayMonth(endDate);
    return `${formattedStartDate} - ${formattedEndDate}`;
  }
  
export function calculateGrossIncome(annualSalary) {
    let monthlyGrossIncome = Math.floor(annualSalary / 12);
    return monthlyGrossIncome;
  }
  
export function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
export function calculateIncomeTax(annualSalary) {
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
  
export function calculateNetIncome(monthlyGrossIncome, incomeTax) {
    let netIncome;
    if (monthlyGrossIncome <= 18200) {
      netIncome = monthlyGrossIncome;
    }
  
    netIncome = monthlyGrossIncome - incomeTax;
    return netIncome;
  }
  
export function calculateSuper(monthlyGrossIncome, superRate) {
    let superIncome = Math.floor(monthlyGrossIncome * superRate/100);
    return superIncome;
  }
  