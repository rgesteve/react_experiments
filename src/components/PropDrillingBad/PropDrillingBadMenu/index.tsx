import React, { PureComponent } from 'react';
import PropDrillingBadMenuItem from './PropDrillingBadMenuItem';

class PropDrillingBadMenu extends PureComponent<any, {item : string}> {

  state = {
    item : 'A',
  };

  setItem = (item : any)  => {
    console.log(`Setting item to ${item}...`);
    this.setState({ item })
  };

  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>Prop Drilling Bad</h1>
	<div>
	  <PropDrillingBadMenuItem item="A" onClick={this.setItem} />
  	  <PropDrillingBadMenuItem item="B" onClick={this.setItem} />
  	  <PropDrillingBadMenuItem item="C" onClick={this.setItem} />
	</div>
      </div>
    );
  }
  
}

export default PropDrillingBadMenu;