import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import Smiley from './components/Smiley';
import PropDrillingBad from './components/PropDrillingBad';
import {TopComponent} from './components/ComponentHierarchy';

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
        <Smiley height={300} width={300} />
	<PropDrillingBad />
	</code>
	experiments.
	</p>
      </header>
    </div>
  );
}

export default App;
