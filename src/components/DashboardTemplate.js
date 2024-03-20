import React, { Component } from "react";
import DashboardRoutes from "../routes/DashboardRoutes";
import SideNav from "./SideNav";
import {
  faChalkboardTeacher,
  faChartLine,
  faGauge,
  faGears,
  faLayerGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  checkAdmin,
  checkInstructor,
  checkStudent,
} from "../utils/Permissions";
import Header from "./Header";

const demoUser = "Admin";

class DashboardTemplate extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menus: [
      {
        name: "Dashboard",
        iconName: faGauge,
        link: "/dashboard",
        display: true,
      },
      {
        name: "Projects",
        iconName: faLayerGroup,
        link: "/dashboard/profile",
        display: checkAdmin(demoUser) ? true : false,
      },
      {
        name: "Groups",
        iconName: faUsers,
        link: "/dashboard/schools",
        display:
          checkAdmin(demoUser) || checkInstructor(demoUser) ? true : false,
      },
      {
        name: "Instructors",
        iconName: faChalkboardTeacher,
        link: "/dashboard/user",
        display: checkAdmin(demoUser) ? true : false,
      },
      {
        name: "Analytics",
        iconName: faChartLine,
        link: "/dashboard/instructors",
        display: checkAdmin(demoUser) ? true : false,
      },
      {
        name: "Members",
        iconName: faUsers,
        link: "/dashboard/members",
        display: checkStudent(demoUser) ? true : false,
      },
    ],
    settingMenu: {
      name: "Settings",
      iconName: faGears,
      link: "/dashboard/settings",
    },
  };

  handleClick = (menu) => {
    this.setState({ selectedMenu: menu, parentMenu: null });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <SideNav
          menus={this.state.menus}
          handleClick={this.handleClick}
          settingMenu={this.state.settingMenu}
        />
        <div style={{ flex: 1, height: "100vh", overflow: "auto" }}>
          <Header selectedMenu={this.state.selectedMenu}></Header>
          <DashboardRoutes></DashboardRoutes>
        </div>
      </div>
    );
  }
}

export default DashboardTemplate;
