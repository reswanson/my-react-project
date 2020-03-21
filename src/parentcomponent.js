// from https://codeburst.io/react-js-understanding-functional-class-components-e65d723e909

import React, { Component } from 'react';
import FirstChild from './firstchild';  // we need to import the child component first

class ParentComponent extends Component {
  render() {
    return (
      <p>
        <hr/>
        I'm a parent component.
        <FirstChild wherecalledfrom = "fromparentcomponent}"/>
      </p>
    );
  }
}
export default ParentComponent;