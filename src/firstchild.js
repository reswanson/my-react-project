import React from 'react';     // React needs to be imported
// from https://codeburst.io/react-js-understanding-functional-class-components-e65d723e909


const FirstChild = ({wherecalledfrom}) => {
  return <p> I am a child called from {wherecalledfrom} </p>; 
};
export default FirstChild;