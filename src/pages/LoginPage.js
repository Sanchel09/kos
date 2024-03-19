import React, { Component } from "react";
import koiLogo from "../assets/images/koiLogo.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", flexDirection: "column" }}
        >
          <img src={koiLogo} alt="Logo" className="img-fluid" />
          <div>This is login page</div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
