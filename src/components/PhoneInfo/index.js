import React, { Component } from "react";
import "./styles.css";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      id: 0,
      name: "name",
      phoneNumber: "010-0000-0000"
    },
    handleRemove: () => console.log("handleRemove not defined!")
  };

  state = {
    editing: false,
    name: "",
    phoneNumber: ""
  };

  _clickButton = () => {
    const { info, handleRemove } = this.props;
    handleRemove(info.id);
  };

  _handleToggleEdit = () => {
    //editing의 상태를 바꿔주는 함수
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  //input 에서 onChange 이벤트가 발생될 때마다 호출되는 함수
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //editing 값이 바뀔 때 처리 할 로직이 적혀있음.
  //수정을 눌렀을땐 기존의 값이 input에 나타나고,
  //수정을 적용할땐, input 의 값들을 부모한테 전달해준다.
  componentDidUpdate(prevProps, prevState) {
    const { info, onUpdate } = this.props;
    //editing의 값이 false -> true로 넘어갈 때
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phoneNumber: info.phoneNumber
      });
    }

    //editing의 값이 true -> false 로 넘어갈때
    if (prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber
      });
    }
  }

  render() {
    const { name, phoneNumber } = this.props.info;
    const { editing } = this.state;

    //수정 모드
    if (editing) {
      return (
        <div className="container">
          <input
            value={this.state.name}
            placeholder="edit name..."
            name="name"
            onChange={this.handleChange}
            className="container__input"
          />
          <input
            value={this.state.phoneNumber}
            placeholder="edit number..."
            name="phoneNumber"
            onChange={this.handleChange}
            className="container__input"
          />
          <button
            onClick={this._handleToggleEdit}
            className="container__button"
          >
            Submit
          </button>
          <button onClick={this._clickButton} className="container__button">
            Delete
          </button>
        </div>
      );
    }
    return (
      <div className="container">
        <span className="container__span">{name}</span>{" "}
        <span className="container__span">{phoneNumber}</span>
        <button onClick={this._handleToggleEdit} className="container__button">
          edit
        </button>
        <button onClick={this._clickButton} className="container__button">
          Delete
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
