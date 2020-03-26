import React, { Component } from 'react';
import { Card, Form, ListGroup, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");

  }

  render() {
    return (
      <div style={divStyle}>
<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>dkdkdkdkd</ListGroup.Item>
    <ListGroup.Item> asdkldklj</ListGroup.Item>
    <ListGroup.Item> adkasl</ListGroup.Item>
  </ListGroup>
</Card>
</div>
    )
  }
}

export default LoginForm;
