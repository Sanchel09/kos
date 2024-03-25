import React, { Component } from "react";
import DashboardRoutes from "../../routes/DashboardRoutes";
import SideNav from "../SideNav";
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
} from "../../utils/Permissions";
import Header from "../Header";

const demoUser = "Admin";

class DashboardTemplate extends Component {
  state = {
    selectedMenu: {
      name: "Dashboard",
      iconName: faGauge,
      link: "/dashboard",
      display: true,
    },
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
        link: "/dashboard/groupPage",
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
        link: "/dashboard/membersPage",
        display: checkStudent(demoUser) || checkAdmin(demoUser) ? true : false,
      },
    ],
    settingMenu: {
      name: "Settings",
      iconName: faGears,
      link: "/dashboard/settings",
    },
    sidebarCollapsed: false,
  };

  handleClick = (menu) => {
    this.setState({ selectedMenu: menu, parentMenu: null });
  };

  toggleSidebar = () => {
    this.setState({ sidebarCollapsed: !this.state.sidebarCollapsed });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <SideNav
          menus={this.state.menus}
          handleClick={this.handleClick}
          settingMenu={this.state.settingMenu}
          sidebarCollapsed={this.state.sidebarCollapsed}
        />
        <div style={{ flex: 1, height: "100vh", overflow: "auto" }}>
          <Header
            selectedMenu={this.state.selectedMenu}
            toggleSidebar={this.toggleSidebar}
          ></Header>
          <DashboardRoutes></DashboardRoutes>
        </div>
      </div>
    );
  }
}

export default DashboardTemplate;
