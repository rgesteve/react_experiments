import React, { PureComponent } from 'react';
import PropDrillingBadMenuItem from './PropDrillingBadMenuItem';
import PropDrillingBadMenuA from './PropDrillingBadMenuA';

interface PropDrillingBadMenuProps {
  bgColor : string,
  fgColor : string
}

class PropDrillingBadMenu extends PureComponent<PropDrillingBadMenuProps, {item : string}> {

  state = {
    item : 'A',
  };

  setItem = (item : any)  => {
    console.log(`Setting item to ${item}...`);
    this.setState({ item })
  };

  render() {
    const { bgColor, fgColor } = this.props;
    const { item } = this.state;
    return (
      <div>
        <h1>Prop Drilling Bad</h1>
	<div>
	  <PropDrillingBadMenuItem item="A" onClick={this.setItem} />
  	  <PropDrillingBadMenuItem item="B" onClick={this.setItem} />
  	  <PropDrillingBadMenuItem item="C" onClick={this.setItem} />
	</div>
	{item === 'A' && (
	  <PropDrillingBadMenuA
	    bgColor={bgColor}
    	    fgColor={fgColor}
	  />
	)}
      </div>
    );
  }
  
}

export default PropDrillingBadMenu;