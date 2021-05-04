// Exercise 1 : Giphy API
// Instructions
// 1. Create a program to fetch the API URL provided above.
// 2. Make an AJAX request to the Giphy API and return an Object

let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
xhr.responseType ='json';
xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`); 
    } else {
      console.log(xhr.response); 
    }
  };

  xhr.onerror = function() {
  alert("Request failed");
};

//================EX2======================
let xhrsun = new XMLHttpRequest();
xhrsun.open('GET','https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=2&limit=10')
xhrsun.responseType ='json';
xhrsun.send();

xhrsun.onload = function() {
    if (xhrsun.status != 200) {
      alert(`Error ${xhrsun.status}: ${xhrsun.statusText}`); 
    } else {
      console.log(xhrsun.response); 
    }
  };

  xhrsun.onerror = function() {
  alert("Request failed");
};