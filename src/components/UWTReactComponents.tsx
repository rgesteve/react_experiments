import React from 'react';
import * as UWT from 'ui-widget-toolkit';

export class UWTPieChart extends React.Component<any, any> {

  colorManager : UWT.ColorManager;
  chart : React.RefObject<HTMLDivElement> = React.createRef();
  renderer : UWT.UIRenderer | undefined | null = null;

  pieDef : any = {
    title       : 'Test Chart 1',
    type        : UWT.UIType.Pie,
    data        : { 'data-0' : 45, 'data-1' : 32, 'data-2' : 12, 'data-3' : 14 },
    innerRadius : 0.25
  };

  constructor(props : any) {
    super(props);
    this.colorManager = new UWT.ColorManager();
  }

  update() {
    if (!this.renderer) {
      this.renderer = new UWT.D3Renderer('', this.props.colorManager);
    }
    //if (this.props.chartDef) {
    if (this.pieDef) {
      this.renderer.setDiv(this.chart.current);
      this.renderer.invalidate(this.pieDef, this.props.renderOptions);
    }
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps : any, prevState : any) {
    if (prevProps.chartDef !== this.props.chartDef) {
      this.update();
    }
  }

  render() {
    if (this.props.chartTitle) {
      return(<div>
            <div className='chart-title'>{this.props.chartTitle}</div>
	    <div ref={this.chart} id='chart'></div>
      </div>);
    } else {
      return(<h1>Should be rendering something</h1>);
    }
  }
}