import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary'

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  handleClick = () => {
    this.setState({ counter: ++this.state.counter })
  }

  render() {

    if (this.state.counter === 5) {
      throw new Error('I crashed!')
    }

    return (
      <h1 onClick={this.handleClick}>
        {this.state.counter}
      </h1>
    )
  }
}



function App() {
  let task = 'Click on the numbers to increase the counters. The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.'
  let exOne = 'These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.'
  let exTwo = 'These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.'
  let exThree = 'This counter is not inside of boundary. So if crashes, all other components are deleted.'
  return (
    <>
      <p><b>{task}</b></p>
      <hr></hr>
      <p>{exOne}</p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr></hr>
      <p>{exTwo}</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr></hr>
      <p>{exThree}</p>
      <BuggyCounter />
    </>
  );
}

export default App;
