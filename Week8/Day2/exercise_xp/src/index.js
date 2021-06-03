import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrintHello from './components/PrintHello'
import BootstrapCard from './components/BootstrapCard'
import Jumbotron from './components/Jumbotron'

let artist = {

  title: "McCartney",
  imageUrl :"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
  buttonLabel: "Go to Wikipedia",
  buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
  description: "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."

}

let jumbotron = {
  title: "Welcome to react",
  description: "React is the most popular rendering library in the world",
  buttonLabel: "Go to the official website",
  buttonURL: "https://reactjs.org/"
}


ReactDOM.render(
  <React.StrictMode>
    <PrintHello />
    {/* <BootstrapCard /> */}
    <BootstrapCard {...artist}/>
    <Jumbotron {...jumbotron}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
