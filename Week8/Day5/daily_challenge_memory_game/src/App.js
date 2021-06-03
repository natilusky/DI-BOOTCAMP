import './App.css';
import Card from './components/Card';
import 'tachyons';
import CardList from './components/CardList';
import React from 'react';
import superheroes from './superheroes.json'

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        arr: superheroes
      }
    }

    render() {
      const { arr } = this.state
      console.log(arr);

      return (

        <div className='tc'>



          <CardList heroes={arr} />

        </div>
      );
    }
  }

  export default App;
