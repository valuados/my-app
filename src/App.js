import React from 'react';
import './App.css';

import Navigation from "./components/Navbar/Navbar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes/>
    </div>
  );
}

export default App;
