const Holidays = require('date-holidays')

let now = new Date()
let hd = new Holidays()
hd.init('US')
console.log(hd.getHolidays(2021));