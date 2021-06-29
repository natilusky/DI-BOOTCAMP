import React from 'react';
import { connect } from 'react-redux';
import { changePropertyOne, changePropertyTwo } from './redux/action';
import './App.css';

import Child from './Child'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // property_one: 'text one',
      // property_two: 'text_two',
    }
  }
  // handleChange = (event) => {
  //   this.setState({property_one:event.target.value})
  // }
  fethApi = () => {
    this.setState({ property_two: this.state.property_one })
  }
  render() {
    return (
      <>
        <div className="App">
          <h1>Simple Redux Example</h1>
          <h3>Property One: {this.props.property_one} </h3>
          <input type='text' onChange={this.props.handleChange} />
          <h3>Property Two: {this.props.property_two} </h3>
          <button onClick={this.props.handleClick}> Click </button>
        </div>
        <Child />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    property_one: state.property_one,
    property_two: state.property_two,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => dispatch(changePropertyOne(event.target.value)),
    handleClick: () => dispatch(changePropertyTwo())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
