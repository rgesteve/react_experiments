import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld greeting="Joe" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	Various <code>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          react
        </a>
	</code>
	experiments.
	</p>
      </header>
    </div>
  );
}

export default App;
