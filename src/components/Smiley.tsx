import React from 'react';
//import Math;

interface SmileyProps {
  height : number;
  width  : number;
}

class Smiley extends React.Component<SmileyProps, {}> {

  constructor(props:SmileyProps) {
    super(props);

    this.state = {
      x : 0,
      y : 0
    }
  }

  render() {
    let radius = Math.min(this.props.width, this.props.height) / 2;
    return (
      <h1>I should be drawing a circle of radius {radius}.</h1>
    )
  }

}

export default Smiley;
