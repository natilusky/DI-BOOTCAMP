import './App.css';
import React from 'react';

const APIkey = 'a18a8387a4877c6bc3621b50280b3ddf'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      country: '',
      temperture: '',
      humidity: '',
      windSpeed: '',
      description: '',
      error: true
    }
  }

  getWeather = async e => {
    e.preventDefault();
    console.log(this.state.city);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${APIkey}`)
    const data = await response.json();
    console.log(data);
    if (data.cod == 200) {
      this.setState({
        country: data.sys.country,
        temperture: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        error: false
      })
    } else {
      this.setState({ error: true })
    }
  }

  handlechange = e => {
    this.setState({ city: e.target.value })
  }
  //London
  render() {
    const { city, country, temperture, humidity, windSpeed, description, error } = this.state;
    return (
      <div className="App">
        <h1>Weather Finder</h1>
        <h3>Find out temperature, condition and more...</h3>
        <form>
          <input type='text' placeholder='City...' onChange={this.handlechange} />
          <button onClick={this.getWeather}>Get Whather</button>
        </form>
        {
          (!error)
            ? <div>
              Location: {city}, {country}<br></br>
              Temperture: {temperture}<br></br>
              Humidity: {humidity}<br></br>
              Wind Speed: {windSpeed}<br></br>
              Description: {description}<br></br>
            </div>
            : <div>
              <p>please enter a valid values.</p>
            </div>
        }
      </div>
    )
  }
}


export default App;