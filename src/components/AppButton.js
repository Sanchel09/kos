import React, { Component } from "react";

class AppButton extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    let props = this.props;
    return (
      <div
        className={"cusBtn " + (props.customStyle ? props.customStyle : "")}
        onClick={props.onClick}
      >
        {props.name}
      </div>
    );
  }
}

export default AppButton;
