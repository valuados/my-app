import React, { Component} from "react";

import { Alert } from "react-bootstrap";

class TicTacToe extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', padding: 30}}>
        <div>
          <h2>Tic Tac Toe</h2>
          <Alert key='TicTacToe' variant='dark'>
            Let's start the game
          </Alert>
        </div>
      </div>
    )
  };
}


export default TicTacToe;