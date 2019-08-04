import * as React from 'react';
import TODOListProvider from './store/TODOListProvider';

interface TODOWithContextProps {
  compiler  : string;
  framework : string;
  store     : string;
}

export const TODOWithContext : React.FC<TODOWithContextProps> = (props) => {
  return (
    <h2>The TODO component should be displaying here</h2>
  );
}