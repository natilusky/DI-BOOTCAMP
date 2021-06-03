import './App.css';
import React from 'react';
import FavoriteColor from './components/FavoriteColor';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      color: 'red',
      show: true
    }
    this.outputEvent = this.outputEvent.bind(this);
  }

  outputEvent(event) {
    // the event context comes from the Child
    this.setState({ show: false });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'yellow' })
    }, 5000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let hide = document.getElementById('hide')
    let before = `Before the update, the favorite was ${snapshot.color} <br>`
    let after = `The update favorite is ${this.state.color}`
    hide.innerHTML = before + after
  }

  changeBlue = () => {
    this.setState({ color: 'blue' })
  }


  render() {
    const { color } = this.state
    return (
      <div>
        <Child clickHandler={this.outputEvent} show={this.state.show} />
        <FavoriteColor color={color} changeBlue={this.changeBlue} />
      </div>
    );
  }
}


class Child extends React.Component {
  constructor(props) {
    super(props);
  };

  componentWillUnmount() {
    alert('The component named Header is about to be unmounted')
  }

  render() {
    // console.log(this.props);
    if (this.props.show) {
      return (
        <div>
          <header><h1>Hello World!</h1></header>
          <button onClick={this.props.clickHandler}>Delete Header</button>
          <hr></hr>
        </div>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

}


export default App;
