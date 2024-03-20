import React, { Component } from "react";
import DashboardRoutes from "../routes/DashboardRoutes";
import SideNav from "./SideNav";

class DashboardTemplate extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menus: [
      {
        name: "Dashboard",
        iconName: "dashboard",
        link: "/dashboard",
      },
      {
        name: "My Profile",
        iconName: "people",
        link: "/dashboard/profile",
      },
      {
        name: "School Management",
        iconName: "maps_home_work",
        link: "/dashboard/schools",
      },
      {
        name: "User Management",
        iconName: "people",
        link: "/dashboard/user",
      },
      { name: "Log Out", iconName: "logout", link: "#", display: true },
    ],
  };

  handleClick = (menu, idx) => {
    if (idx) {
      let parentMenu = this.state.menus[idx];
      this.setState({ parentMenu, selectedMenu: menu });
    } else {
      this.setState({ selectedMenu: menu, parentMenu: null });
    }
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <SideNav menus={this.state.menus} handleClick={this.handleClick} />
        <div style={{ flex: 1, height: "100vh", overflow: "auto" }}>
          {/* <Header
            selectedMenu={this.state.selectedMenu}
            parentMenu={this.state.parentMenu}
          ></Header> */}
          <DashboardRoutes></DashboardRoutes>
        </div>
      </div>
    );
  }
}

export default DashboardTemplate;
