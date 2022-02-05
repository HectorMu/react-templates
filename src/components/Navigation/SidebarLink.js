import React from "react";
import { NavLink } from "react-router-dom";
import useSidebarControl from "../../hooks/useSidebarControl";

const defaultFont = {
  fontSize: "16px",
};
const toggledFont = {
  fontSize: "13px",
};

const SidebarLink = ({
  title = "Sidebar link",
  to = "/",
  icon = "fas fa-question",
}) => {
  const { sidebarToggled } = useSidebarControl();
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={to}>
        <i className={icon}></i>
        <span style={sidebarToggled ? toggledFont : defaultFont}>{title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarLink;
