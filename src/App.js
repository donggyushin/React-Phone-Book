import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PhoneForm from "./components/PhoneForm/index";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 1;

  state = {
    information: [
      {
        id: 0,
        name: "이름",
        phoneNumber: "010-0000-0000"
      }
    ]
  };

  _handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info =>
          id === info.id
            ? {
                //id값이 서로 일치한다면
                ...info, //새로운 객체를 만들어서 기존값과 다른 부분들만 수정
                ...data
              }
            : info //그렇지 않으면 기본값 그대로 유지.
      )
    });
  };

  _handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  _handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        id: this.id++,
        ...data
      })
    });
    console.log(JSON.stringify(information));
  };

  render() {
    const { information } = this.state;
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
        <PhoneInfoList
          data={information}
          handleRemove={this._handleRemove}
          onUpdate={this._handleUpdate}
        />
      </div>
    );
  }
}

export default App;
