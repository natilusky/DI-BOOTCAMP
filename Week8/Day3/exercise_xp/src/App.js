import './App.css';
import React from 'react';
import FavoriteColor from './components/FavoriteColor';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      color: 'red'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({color: 'yellow'})
    }, 5000);
  }

 changeBlue = () => {
    this.setState({ color: 'blue' })
  }


  render() {
    const { color } = this.state
    return (
      <div>
        <FavoriteColor color={color} changeBlue={this.changeBlue}/>
      </div>
    );
  }
}

export default App;
