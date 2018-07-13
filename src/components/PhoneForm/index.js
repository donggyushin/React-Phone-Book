import React, { Component } from "react";

import "./styles.css";

class PhoneForm extends Component {
  state = {
    name: "",
    phoneNumber: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleCreate(this.state);
    this.setState({
      name: "",
      phoneNumber: ""
    });
  };

  render() {
    return (
      <div className="Container">
        <h1>phone book</h1>
        <form onSubmit={this.handleSubmit} className="Container__form">
          <input
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            className="Container__form__input"
            name="name"
          />
          <input
            placeholder="전화번호"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
            className="Container__form__input"
            name="phoneNumber"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PhoneForm;
