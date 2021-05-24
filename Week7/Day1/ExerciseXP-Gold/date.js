function calcDate() {

    let date_now = new Date();
    let date_future = new Date(date_now.getFullYear() + 1, 1, 1);

    // get total seconds between the times
    let delta = Math.abs(date_future - date_now) / 1000;

    // calculate (and subtract) whole days
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    let seconds = (delta % 60).toFixed(0);

    return `the 1st January is in ${days} days and ${hours}:${minutes}:${seconds} hours`;
}


module.exports = {
    calcDate: calcDate()
}