// https://jsbin.com/beveno/edit?html,output

import React from 'react';
import { findDOMNode } from "react-dom";

interface SmileyProps {
  height : number;
  width  : number;
}

interface SmileyState {
  x : number;
  y : number;
}

class Smiley extends React.Component<SmileyProps, SmileyState> {

  constructor(props:SmileyProps) {
    super(props);

    this.state = {
      x : 0,
      y : 0
    }
  }

  render() {
    let radius = Math.min(this.props.width, this.props.height) / 2;
    let strokeWidth = radius / 20;
    // draw the circle at the center
    let cx = this.props.width / 2;
    let cy = this.props.height / 2;
    return (
      <svg ref="svg" {...this.props} onMouseMove={this.handleMouseMove.bind(this)}>
        {this.renderHead(cx, cy, radius, strokeWidth)}
        {this.renderEye(cx - radius/3, cy - radius/5, radius/4, strokeWidth)}
	{this.renderEye(cx + radius/3, cy - radius/5, radius/4, strokeWidth)}
	{this.renderMouth(cx - 0.6 * radius, 1.3 * radius, 1.2 * radius, strokeWidth)}
      </svg>
    );
  }

  renderHead(cx : number, cy : number, radius : number, strokeWidth : number) {
    return (
      <circle cx={cx} cy={cy} r={radius - 10} fill="gold" stroke="black" strokeWidth={strokeWidth} />
    );
  }

  renderEye(cx : number, cy: number, radius : number, strokeWidth : number) {
    // what angle are the eyeballs are to point at to track mouse (encoded in state)
    let angle = Math.atan2(this.state.y - cy, this.state.x - cx);
    let bcx = cx + radius / 2 * Math.cos(angle);
    let bcy = cy + radius / 2 * Math.sin(angle);
    return ([
      <circle key="eye"     cx={cx}  cy={cy}  r={radius}   fill="white" stroke="black" strokeWidth = {strokeWidth} />,
      <circle key="eyeball" cx={bcx} cy={bcy} r={radius/2} fill ="black" />
    ]);
  }

  renderMouth(left: number, top: number, width: number, strokeWidth: number) {
    let bottom = top + width * 2/5;
    let path = `M${left} ${top} C ${left + 0.25*width} ${bottom}, ${left + 0.75*width} ${bottom}, ${left+width} ${top}`;
    return (<path d={path} stroke="black" strokeWidth={strokeWidth} fill="transparent" />);
  }

  handleMouseMove(event: React.MouseEvent<SVGSVGElement>) {
    let svg = findDOMNode(this.refs.svg);
    if (svg !== null) {
      let rect = (svg as SVGSVGElement).getBoundingClientRect();
      this.setState({
        x : event.clientX - rect.left,
        y : event.clientY - rect.top
      });
    }
    console.log(`The mouse is moving...`);
  }

}

export default Smiley;
