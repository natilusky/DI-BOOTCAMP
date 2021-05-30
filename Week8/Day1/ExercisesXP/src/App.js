import './App.css';

const myelement = <h1>I Love JSX!</h1>;
const ten = 5 + 5;

const fruitList = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
    <li>Cherries</li>
  </ul>
)

const headers = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
)

const search = (
    <input type="text" />
)

const name  = 'John';
const age = 12;

function App() {
  return (
    <div className="App">

      <h1>Hello world</h1>

      {myelement}

      <h1>React is {ten} times better with JSX</h1>

      {fruitList}

      {headers}

      {search}
    <h1>{name} is {age} years old</h1>
    </div>
  );
}

export default App;
