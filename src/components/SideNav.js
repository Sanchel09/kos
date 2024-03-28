import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import koiLogo from "../assets/images/koiLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function SideNav(props) {
  return (
    <Sidebar
      className={
        "customSidebar " +
        (props.sidebarCollapsed ? "collapseMargin" : "marginCustomBar")
      }
      collapsed={props.sidebarCollapsed}
    >
      <div className="d-flex justify-content-center mb-4">
        <img src={koiLogo} alt="Company" className="sidebarImg" />
      </div>
      <Menu style={{ flex: 1 }}>
        {props.menus.length > 0
          ? props.menus
              .filter((x) => x.display === true)
              .map((menu, idx) => {
                return (
                  <MenuItem
                    key={idx}
                    icon={
                      <FontAwesomeIcon
                        aria-hidden="true"
                        icon={menu.iconName}
                      ></FontAwesomeIcon>
                    }
                    className={
                      window.location.pathname === menu.link
                        ? "sidebarActive"
                        : ""
                    }
                    active={window.location.pathname === menu.link}
                    onClick={() => props.handleClick(menu)}
                    component={<Link to={menu.link} />}
                  >
                    {menu.name}
                  </MenuItem>
                );
              })
          : null}
      </Menu>
      <Menu>
        <MenuItem
          icon={
            <FontAwesomeIcon
              aria-hidden="true"
              icon={props.settingMenu.iconName}
            ></FontAwesomeIcon>
          }
          className={
            window.location.pathname === props.settingMenu.link
              ? "sidebarActive"
              : ""
          }
          active={window.location.pathname === props.settingMenu.link}
          onClick={() => props.handleClick(props.settingMenu)}
          component={<Link to={props.settingMenu.link} />}
        >
          {props.settingMenu.name}
        </MenuItem>
        <MenuItem
          icon={
            <FontAwesomeIcon
              aria-hidden="true"
              icon={faRightFromBracket}
            ></FontAwesomeIcon>
          }
          onClick={() => {
            localStorage.clear();
            // window.location.reload();
            window.location.href = "http://localhost:3000/";
          }}
        >
          Log Out
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideNav;
