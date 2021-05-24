let birthday = new Date(1989, 5, 24);

const returnMinutes = function(birthday) {

    let now = new Date();
    let timeSpent = new Date(now.getTime() - birthday.getTime());
    minutes = Math.floor(timeSpent / 1000);
    return `You lived : ${minutes} minutes in your life`

}

module.exports = returnMinutes;