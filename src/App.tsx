import React from 'react';
import logo from './logo.svg';
import './App.css';

//import * as UWT from 'ui-widget-toolkit';

import HelloWorld from './components/HelloWorld';
import Smiley from './components/Smiley';
import {UWTPieChart} from './components/UWTReactComponents';

import classnames from 'classnames'
import { BarChart } from 'react-d3-components' ;

const App: React.FC = () => {
  let classes = classnames("btn", { "isActive" : true});

  let data = [
    { label: 'somethingA',
      values : [
            { x : 'SomethingA', y : 10 },
            { x : 'SomethingB', y : 4 },
            { x : 'SomethingC', y : 3 },
      ]
    },
    { label: 'somethingB',
      values : [
            { x : 'SomethingA', y : 6 },
            { x : 'SomethingB', y : 8 },
            { x : 'SomethingC', y : 5 },
      ]
    },
    { label: 'somethingC',
      values : [
            { x : 'SomethingA', y : 6 },
            { x : 'SomethingB', y : 8 },
            { x : 'SomethingC', y : 5 },
      ]
    },
  ];

  return (
    <div className="App">
      <header className="App-header">

        <div className="row">
      	<BarChart
	  data={data}
  	  height={400}
  	  width={600}
  	  margin={{ top : 10, bottom : 50, left: 50, right : 10 }}
	/>
	</div>

	<div className="container-fluid">
	  <div className="row">
          <HelloWorld greeting="Joe" />
	  </div>

	  <div className="row">
            <div className="col pagination-center">
      	      <UWTPieChart chartTitle="The chart title" />
	    </div>
	    <div className="col">
              <Smiley height={300} width={300} />
	    </div>
          </div>
	</div>

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

	</p>
      </header>
    </div>
  );
}

export default App;
