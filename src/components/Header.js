import {
  faBars,
  faBell,
  faCircleChevronDown,
  faEnvelope,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import userImg from "../assets/images/userImg.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <header className="headerDiv">
          <FontAwesomeIcon
            icon={faBars}
            className="sidebarToggle"
            onClick={this.props.toggleSidebar}
          />
          <div className="searchDiv">
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            <input
              type="text"
              className="searchBar"
              name="search"
              value={this.props.searchData}
              onClick={this.props.handleSearch}
              placeholder="Search"
            />
          </div>
          <div className="emptyDiv"></div>
          <div className="userInfoDiv">
            <FontAwesomeIcon icon={faEnvelope} className="mailIcon" />
            <div className="position-relative" style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faBell} className="bellIcon" />
              <span class="badge headerBadge">5</span>
            </div>
            <span
              className="dropdown d-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ margin: "0 10px" }}
              >
                <img src={userImg} className="userImage" alt="User" />
                <div className="ms-3">
                  <p className="userLabel">John Doe</p>
                  <p className="userType">Admin</p>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faCircleChevronDown}
                className="downArrow"
              />
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </header>
        <p className="pageTitle">{this.props.selectedMenu.name}</p>
      </div>
    );
  }
}

export default Header;
