import React from 'react';

interface HelloProps {
  greeting : string
}

interface HelloState {
  wasDisplayed : boolean
}

class HelloWorldComponent extends React.Component<HelloProps, HelloState> {
   /* empty */
}