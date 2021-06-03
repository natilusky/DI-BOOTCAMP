import Counter from './Counter'
import ErrorBoundary from './ErrorBoundary'
import './App.css';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </>
  );
}

export default App;
