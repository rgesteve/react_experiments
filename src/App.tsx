import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import Smiley from './components/Smiley';

import classnames from 'classnames'

const App: React.FC = () => {
  let classes = classnames("btn", { "isActive" : true});

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld greeting="Joe" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	Various 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          react experiments.
        </a>
        <Smiley height={300} width={300} />
	</p>
      </header>
    </div>
  );
}

export default App;
