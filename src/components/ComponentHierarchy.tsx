import React, { PureComponent } from 'react';

interface TopComponentState {
  searchTerm : string
}

export class TopComponent extends React.Component<{}, TopComponentState> {
  constructor(props : {}) {
    super(props);
    this.state = {
      searchTerm : ''
    }
  }

  updateSearchTerm = (term : string) => {
    this.setState( {searchTerm : term});
  }

  render() {
    const { searchTerm } = this.state;
    return(
      <div className="App">
        <p>This is the topcomponent</p>
      </div>
    );
  }
}