import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Products from "./components/Product/Products";
import Home from "./components/Home/Home";
import TicTacToe from "./components/games/TicTacToe/TicTacToe";
import history from './history';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Products" component={Products} />
          <Route path="/games/TicTacToe" component={TicTacToe}/>
        </Switch>
      </Router>
    )
  }
}