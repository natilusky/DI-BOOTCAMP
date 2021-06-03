import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  handleClick = () => {
    this.setState({ counter: ++this.state.counter })
  }

  render() {

    if (this.state.counter >= 5) {
      throw new Error('Crashed')
    }
    
    return (
      <div>
        <button> onClick={this.handleClick}Click</button>
        {this.state.counter}
      </div>
    )

  }
}
export default Counter
