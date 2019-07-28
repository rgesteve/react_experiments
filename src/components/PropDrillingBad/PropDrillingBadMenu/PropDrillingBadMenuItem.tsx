import React, { PureComponent } from 'react';

interface PropDrillingBadMenuItemProps {
  item : string,
  onClick : (arg : any) => void
}

class PropDrillingBadMenuItem extends PureComponent<PropDrillingBadMenuItemProps> {

  handleClick = () => {
    const { item, onClick } = this.props;
    onClick(item);
  }

  render() {
    const { item } = this.props;
    return (
      <button type="button" onClick={this.handleClick}>{ item }</button>
    );
  }
}

export default PropDrillingBadMenuItem;

