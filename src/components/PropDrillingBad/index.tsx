import React, { PureComponent } from 'react';
import PropDrillingBadMenu from './PropDrillingBadMenu';

class PropDrillingBad extends PureComponent {

  render() {
    return (
      <div><h1>This is the component in PropDrillingBad</h1>
      <PropDrillingBadMenu />
      <h1>(end of the game)</h1>
      </div>
    );
  }

}

export default PropDrillingBad;



