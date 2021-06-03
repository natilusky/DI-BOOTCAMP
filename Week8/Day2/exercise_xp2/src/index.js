import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Alert4 from './components/Alert4';
import Alert3 from './components/Alert3';
import Alert2 from './components/Alert2';
import Alert1 from './components/Alert1';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

let textAlertOne = 'OMG! Something really bad has happended!';

let objAlertTwoExOne = {
  text: 'This is a danger alert - check it out!',
  show: true
}

let objAlertTwoExTwo = {
  text: 'This is a danger alert - check it out!',
  show: false
}

let objAlertTreeExOne = {
  text: 'This is a danger alert - check it out!',
  color: 'red'
}

let objAlertTreeExTwo = {
  text: 'This is a warning alert - check it out!',
  color: 'orange'
}

let objAlertFourExOne = {
  text: 'I am supposed to be green',
  color: 'green'
}

let objAlertFourExTwo = {
  text: 'This wronge',
  color: 'blue'
}




ReactDOM.render(
  <React.StrictMode>

    <Alert1 text = {textAlertOne} />

    <Alert2 {...objAlertTwoExOne} />
    <Alert2 {...objAlertTwoExTwo} />

    <Alert3 {...objAlertTreeExOne} />
    <Alert3 {...objAlertTreeExTwo} />

    <Alert4 {...objAlertTreeExOne} />
    <Alert4 {...objAlertTreeExTwo} />
    <Alert4 {...objAlertFourExOne} />
    <Alert4 {...objAlertFourExTwo} />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
