import React from 'react';

interface HelloProps {
  greeting : string
}

interface HelloState {
  wasDisplayed : boolean
}

class HelloWorldComponent extends React.Component<HelloProps, HelloState> {
   public render() {
     return(
        <h1>This is a test....</h1>
     );   
   }
}

export default HelloWorldComponent;