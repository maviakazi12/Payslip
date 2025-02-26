export function errorHandling(firstName, lastName, annualSalary, superRate, startDate, endDate){
     let errors = [];
    
      if (
        !firstName ||
        !lastName ||
        !annualSalary ||
        !superRate ||
        !startDate ||
        !endDate
      ) {
        errors.push("All fields are required");
      }
    
      if (annualSalary < 10000 && annualSalary === null) {
        errors.push("Salary must be above $10,000");
      }
    
      if (new Date(endDate) < new Date(startDate)) {
        errors.push("End Date cannot be before Start Date");
      }
      return errors
}