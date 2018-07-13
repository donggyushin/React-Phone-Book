import React, { Component } from "react";
import "./styles.css";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      id: 0,
      name: "name",
      phoneNumber: "010-0000-0000"
    }
  };

  render() {
    const { name, phoneNumber } = this.props.info;
    return (
      <div className="container">
        <span className="container__span">{name}</span>{" "}
        <span className="container__span">{phoneNumber}</span>
      </div>
    );
  }
}

export default PhoneInfo;
