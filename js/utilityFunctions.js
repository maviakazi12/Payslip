export function getDayMonth(date) {
    //convert string into date object
    let dateObj = new Date(date);
    //extract the date from date object
    let day = dateObj.getDate();
    //extract month and convert it into full month name
    let month = dateObj.toLocaleString("default", { month: "long" });
    return `${day} ${month}`;
  }
  
