import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PhoneForm from "./components/PhoneForm/index";

class App extends Component {
  _handleCreate = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PhoneForm handleCreate={this._handleCreate} />
      </div>
    );
  }
}

export default App;
