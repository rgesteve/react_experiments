import React from 'react';

interface HelloProps {
  greeting : string
}

interface HelloState {
  wasDisplayed : boolean
}

class HelloWorld extends React.Component<HelloProps, HelloState> {
   public render() {
     return(
        <h1>This is a test....[{this.props.greeting}] </h1>
     );   
   }
}

export default HelloWorld;