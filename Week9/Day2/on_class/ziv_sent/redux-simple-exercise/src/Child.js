import React from 'react';
import {connect} from 'react-redux';
import {changePropertyOne} from './redux/action';
const Child = (props) => {
  return (
    <div className="App">
      <h1>Child HaHa</h1>
      {props.property_one}<br/>
      <input type='text' onChange={props.handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    property_one: state.property_one,
    user: state.username
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange:(event) => dispatch(changePropertyOne(event.target.value)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Child)
