import './App.css';
import React from 'react';
import quotes from './QuotesDatabase'
// import "bootstrap/dist/css/bootstrap.min.css";
import 'tachyons';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import randomColor  from 'randomcolor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 1,
      color: 'red'
    }
  }

  chooseColor = () => {
    this.setState({ color: (randomColor()) })
  }


  randomQuotes = () => {
    this.chooseColor();
    this.setState({ random: (Math.floor(Math.random() * quotes.length)) })
  }

  render() {
    return (
      <div style={{color : this.state.color, background: '#ffffff'}}>
        <h2>{`"${quotes[this.state.random].quote}"`}</h2>
        <h3>{`-${quotes[this.state.random].author}-`}</h3>
        <button style={{background: this.state.color , color: '#ffffff'}} onClick={this.randomQuotes}>New quote</button>
      </div>
    )
  }


}

export default App;
