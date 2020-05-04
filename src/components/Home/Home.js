import React from "react";
import { Button } from "react-bootstrap";

import history from "../../history";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return(
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app for showing react functionality</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Products')}>Click button to view products</Button>
          </form>
        </div>
      </div>
    );
  }
}