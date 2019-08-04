import React, { PureComponent } from 'react';

interface TopComponentState {
  searchTerm : string
}

export class TopComponent extends React.Component<{}, TopComponentState> {

  state = {
    searchTerm : ''
  }

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
      	<Header searchTerm={this.state.searchTerm} />
        <p>This is the topcomponent</p>
      </div>
    );
  }
}

interface HeaderProps {
  searchTerm : string
}

const Header : React.FC<HeaderProps> = (props : HeaderProps) => {
  return (
    <div className="Header">
      <HeaderTop />
      <p>This should be the header</p>
    </div>
  );
}

const HeaderTop = () => (
   <div className="HeaderTop">
      <p>The Header top</p>
   </div>
);