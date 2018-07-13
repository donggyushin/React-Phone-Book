import React, { Component } from "react";
import PhoneInfo from "../PhoneInfo";
import "./styles.css";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  };

  render() {
    const { data } = this.props;
    const list = data.map(info => <PhoneInfo key={info.id} info={info} />);
    return <div className="phoneInfoList__container">{list}</div>;
  }
}

export default PhoneInfoList;
