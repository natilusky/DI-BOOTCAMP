import React from 'react';
import './App.css';

const clickHandler = () => {
    alert('I was clicked')
}

class App extends React.Component {
  constructor() {
    super();
}

shoot = () => {
    alert('Nice Shot!')
  }

shoot1 = () => {
    alert('Great Shot!')
}

shoot2 = () => {
    alert(this)
}

shoot3 = () => {
    alert(this)
}

shoot4 = (value) => {
    alert(value)
}

shoot5 = (value) => {
    alert(value)
}



render() {
    return (
        <>
            <h4>Exercise 1: OnClick</h4>
            <button onClick={this.shoot}>Shoot Again!</button>
            <hr></hr>
            <h4>Exercise 2: Event Handlers</h4>
            <button onClick={this.shoot1}>Take the Shot!</button>
            <hr></hr>
            <h4>Exercise 3: This</h4>
            <button onClick={this.shoot2}>Keep Shooting!</button>
            <hr></hr>
            <h4>Exercise 4: Arrow Function</h4>
            <button onClick={this.shoot3}>Keep shooting</button>
            <hr></hr>
            <h4>Exercise 5: Arguments</h4>
            <button onClick={() => this.shoot4('Goal')}>Shooting!</button>
            <hr></hr>
            <h4>Exercise 6: Bind</h4>
            <button onClick={this.shoot5.bind(this, 'Goal')}>Shooting!</button>
            <hr></hr>
            <h4>Exercise 7: Click Me</h4>
            <button onClick={clickHandler}>Click Me!</button> */}
  </>
    )
}
}

export default App;
