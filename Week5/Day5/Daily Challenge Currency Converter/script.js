let scrollOne = document.getElementById("list_country1")
let scrollTwo = document.getElementById("list_country2")
let amount = document.getElementById("amount").value;
let result = document.getElementById("result")



button.addEventListener('click', convertCurrency);

scrollCurrencyTwo()
scrollCurrencyOne()

async function scrollCurrencyOne() {
  try {
    const response = await fetch('http://www.apilayer.net/api/list?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1')
    const data = await response.json();
    Object.keys(data.currencies).forEach((key) => {
      let options = document.createElement("option");
      options.setAttribute("value", key);
      options.innerText = `${key} - ${data.currencies[key]}`;
      options.setAttribute("id", key);
      scrollOne.appendChild(options);
    })
  } catch (e) {
    console.log(e + 'Error in scrollCurrencyOne function');
  }
}

async function scrollCurrencyTwo() {
  try {
    const response = await fetch('http://www.apilayer.net/api/list?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1')
    const data = await response.json();
    Object.keys(data.currencies).forEach((key) => {
      let options = document.createElement("option");
      options.setAttribute("value", key);
      options.innerText = `${key} - ${data.currencies[key]}`;
      options.setAttribute("id", key);
      scrollTwo.appendChild(options);
    })
  } catch (e) {
    console.log(e + 'Error in scrollCurrencyTwo function');
  }
}

function convertCurrency() {
  let amount = document.getElementById("amount").value;
  let currOne = scrollOne.options[scrollOne.selectedIndex].id;
  let currTwo = scrollTwo.options[scrollTwo.selectedIndex].id;
  fetch("http://www.apilayer.net/api/live?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1")
    .then(response => response.json())
    .then(response => response.quotes)
    .then(data => {
      for (key in data) {

        if (key === "USD" + currOne)
          coinOne = data[key];

        if (key === "USD" + currTwo)
          coinTwo = data[key];

      }
      return [coinOne, coinTwo];
    })
    .then(values => { result.innerHTML = ((amount * coinTwo) / coinOne).toFixed(3) + " " + currTwo });
};