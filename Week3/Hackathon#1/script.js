///random for rollet
function randomNum(){
const randomNum = document.querySelector('.centered')
let newNum = Math.floor(Math.random() * 36)+1; 
randomNum.innerHTML = newNum;
return newNum;
}
let newBalance = 0;
updateAmount(100000,1)

const gridItem = document.querySelectorAll('.grid-number')
const color = document.querySelectorAll('.grid-item')
for (let i=0; i < color.length; i++) {
    color[i].addEventListener("click", selected)
}

let numberGuess = [];
function selected (event) {
        for (let i=0; i < gridItem.length; i++) {
        gridItem[i].style.backgroundColor = "white";
    }
    numberGuess.push(parseInt(event.target.classList[1]))
    event.target.classList.toggle('selected')
}

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clear)

function clear() {
    for (let i=0; i < gridItem.length; i++) {
        gridItem[i].style.backgroundColor = "white";
    }
    for (let i=0; i < color.length; i++) {

        if (color[i].classList.contains('selected')) {
            color[i].classList.remove('selected')
        }
    }
    numberGuess = [];

}

const betBtn = document.querySelector('.bet')
betBtn.addEventListener('click', bet)

function bet() {
  let bet =  document.getElementById('amount').value;
  updateAmount(-bet,numberGuess.length)
  let chance = randomNum()
  if (numberGuess.includes(chance)){
       updateAmount(bet,36)
       updatePrice(bet,36)
  }else{
    updatePrice(bet,0)
  }
   updateNumbers()
    clear();
}

function updateAmount(num,count){   
newBalance += num*count; 
let str = "Your Account: "+ newBalance + "$"
document.querySelector('.balance').innerHTML = str;
}

function updateNumbers(){  
const numbers = document.querySelector('.numbers') 
let str = "The numbers you chose is: ";
for (num of numberGuess){
    str += num + ","
}
str = str.slice(0, -1)
numbers.innerHTML = str;
}

function updatePrice(num,count){  
const price = document.querySelector('.price') 
let numberPrize = num*count;
let str = `Your prize is: ${numberPrize} $`;
price.innerHTML = str;
}