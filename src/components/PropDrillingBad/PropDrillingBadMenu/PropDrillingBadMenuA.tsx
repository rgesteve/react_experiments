import React, { PureComponent } from 'react';

interface PropDrillingBadMenuAProps {
  bgColor: string,
  fgColor: string
};

class PropDrillingBadMenuA extends PureComponent<PropDrillingBadMenuAProps> {
  render() {
    const { bgColor, fgColor } = this.props;
    return (
      <h3
        style={{
          backgroundColor: bgColor,
          color: fgColor,
        }}
      >
        Apple
      </h3>
    );
  }
}

export default PropDrillingBadMenuA;
