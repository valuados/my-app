import React, { Component} from "react";

import { Alert } from "react-bootstrap";

const text = 'Vlad';

class About extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', padding: 30}}>
        <div>
          <h2>About Page</h2>
          <Alert key={typeText(text) + Math.random() * 100} variant='dark'>
            This is a 'dark' alert—check it out! {typeText(text)}
          </Alert>
        </div>
      </div>
    )
  };
}

function typeText (text) {
  return text;
}
export default About;