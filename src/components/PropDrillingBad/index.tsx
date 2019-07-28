import React, { PureComponent } from 'react';
import PropDrillingBadMenu from './PropDrillingBadMenu';

interface PropDrillingBadState {
  bgColor : string,
  fgColor : string
}

class PropDrillingBad extends PureComponent<{}, PropDrillingBadState> {

  state = {
    bgColor: 'white',
    fgColor: 'black'
  };

  render() {
    const { bgColor, fgColor } = this.state;

    return (
      <div><h1>This is the component in PropDrillingBad</h1>
      <PropDrillingBadMenu bgColor={bgColor} fgColor={fgColor} />
      <h1>(end of the game)</h1>
      </div>
    );
  }

}

export default PropDrillingBad;



