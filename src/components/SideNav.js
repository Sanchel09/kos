import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SideNav(props) {
  //   const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <Sidebar>
      <Menu>
        {props.menus.length > 0
          ? props.menus.map((menu, idx) => {
              return (
                <MenuItem
                  key={idx}
                  // icon={
                  //   <span
                  //     className="material-icons-round sidebarIcon"
                  //     aria-hidden="true"
                  //   >
                  //     {menu.iconName}
                  //   </span>
                  // }
                  active={window.location.pathname === menu.link}
                  onClick={
                    menu.name === "Log Out"
                      ? () => {
                          localStorage.clear();
                          window.location.reload();
                        }
                      : () => props.handleClick(menu)
                  }
                  component={<Link to={menu.link} />}
                >
                  {menu.name}
                </MenuItem>
              );
            })
          : null}
      </Menu>
    </Sidebar>
  );
}

export default SideNav;
