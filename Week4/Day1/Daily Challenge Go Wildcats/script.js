// Daily Challenge : Go Wildcats

const gameInfo = [
{username: "john", team: "red", score: 5, items: ["ball", "book", "pen"]},
{username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"]},
{username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"]},
{username: "tyson", team: "green", score: 1, items: ["book", "pen"]},
];

// 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
let userArr = [];
gameInfo.forEach((info, i) => {
   userArr[i] = info.username;
});
console.log(userArr)

   // 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
   let userBigger = [];
   gameInfo.forEach((info, i) => {
      if (info.score>5)
         userBigger.push(info.username);
   });
   console.log(userBigger)


// 3. Find and display the total score of the users.
   let count = 0;
   gameInfo.forEach((info, i) => {
      count += info.score;
   });
   console.log(count)