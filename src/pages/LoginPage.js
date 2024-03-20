import React, { Component } from "react";
import koiLogo from "../assets/images/koiLogo.png";
import AppButton from "../components/AppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import History from "../utils/History";
import { WithRouter } from "../utils/WithRouter";
class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: "",
    password: "",
    showPassword: false,
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleLogin = () => {
    if (this.state.username == "" || this.state.password == "") {
      Swal.fire({
        title: "Error!",
        text: "Username or Password missing",
        icon: "error",
      });
    } else {
      if (this.state.username === "admin" && this.state.password == "admin") {
        History.push(`${process.env.PUBLIC_URL}/dashboard`);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Username or Password is incorrect",
          icon: "error",
        });
      }
    }
  };

  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center loginBg"
        style={{ height: "100vh", flexDirection: "column" }}
      >
        <div className="loginDiv">
          <img src={koiLogo} alt="Logo" className="img-fluid" />
          <div className="mt-4">
            <div className="position-relative">
              <FontAwesomeIcon
                icon={faUserAlt}
                className="loginIcon"
              ></FontAwesomeIcon>
              <input
                type="text"
                className="form-input"
                name="username"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleChange}
              />
            </div>
            <div className="position-relative">
              <FontAwesomeIcon
                icon={faKey}
                className="loginIcon"
              ></FontAwesomeIcon>
              <input
                type={this.state.showPassword ? "text" : "password"}
                className="form-input"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <FontAwesomeIcon
                icon={this.state.showPassword ? faEyeSlash : faEye}
                className="pswIcon"
                onClick={this.handleShowPassword}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className="m-3 d-flex justify-content-center">
            <AppButton name="Login" onClick={this.handleLogin} />
          </div>
        </div>
      </div>
    );
  }
}

export default WithRouter(LoginPage);
