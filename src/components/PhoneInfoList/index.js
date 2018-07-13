import React, { Component } from "react";
import PhoneInfo from "../PhoneInfo";
import "./styles.css";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    handleRemove: () => console.log("handleRemove not defined!"),
    onUpdate: () => console.log("onUpdate not defined!")
  };

  render() {
    const { data } = this.props;
    const list = data.map(info => (
      <PhoneInfo
        key={info.id}
        info={info}
        handleRemove={this.props.handleRemove}
        onUpdate={this.props.onUpdate}
      />
    ));
    return <div className="phoneInfoList__container">{list}</div>;
  }
}

export default PhoneInfoList;
