import './App.css';
// const { useState } = React;

function Counter() {
  return (
    <div className="counter">
      <span>show counter value here</span>
      <div className="counter-controls">
        <button type="button" className="button is-danger is-small">-</button>
        <button type="button" className="button is-success is-small">+</button>
      </div>
    </div>
  );
}

function App() {
  const data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ITW test
        </a>
      </header>
      <main>
        <div>
          <h2>Counters</h2>
          {data.map((counter) => (
            <Counter key={counter.id} id={counter.id} value={counter.value} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
