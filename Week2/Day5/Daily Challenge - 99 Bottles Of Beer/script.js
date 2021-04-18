let userNum
do{
userNum = prompt("Enter number to begin counting down bottles");
}while (isNaN(userNum) || userNum == "" || userNum < 1 || userNum > 99);
let bottles = userNum;
let down = 1;
while(bottles - down > 0) {
    console.log(`${bottles} bottles of beer on the wall`);
    console.log(`${bottles} bottles of beer`);
    console.log(`Take ${down} down, pass ${(down == 1 ? 'it' : 'them')} around`); 
    console.log(`${bottles-down} bottles of beer on the wall`);
    bottles -= down;
    down++;
}
if (bottles - down <= 0) {
    console.log(`${bottles} bottles of beer on the wall,\n${bottles} bottles of beer`);
    console.log(`Take ${(bottles == 1 ? 'it' : 'them')} down, pass ${(bottles == 1 ? 'it' : 'them')} around`);
    console.log("no more bottles of beer on the wall")
}
