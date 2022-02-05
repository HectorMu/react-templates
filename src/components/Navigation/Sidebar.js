//Importing react router link
import React from "react";
import { NavLink } from "react-router-dom";
//importing local sidebar components
import SidebarDropdown from "./SidebarDropdown";
import SidebarSectionContextProvider from "../../context/SidebarSectionContextProvider";
import SidebarLink from "./SidebarLink";
//Importing hooks
import useSidebarControl from "../../hooks/useSidebarControl";

const Sidebar = () => {
  const { sidebarToggled, handleSidebarToggle } = useSidebarControl();

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
        sidebarToggled ? `toggled` : ``
      }`}
      id="accordionSidebar"
    >
      <NavLink
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Brand</div>
      </NavLink>

      <hr className="sidebar-divider my-0"></hr>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />

      <SidebarSectionContextProvider SectionName="Section 1">
        <SidebarDropdown title="Option 1" icon="fas fa-times">
          <NavLink className="collapse-item" to="/url">
            Element A
          </NavLink>
          <NavLink className="collapse-item" to="/url">
            Element B
          </NavLink>
        </SidebarDropdown>
        <SidebarDropdown title="Option 2" icon="fas fa-cog">
          <NavLink className="collapse-item" to="/url">
            Element A
          </NavLink>
          <NavLink className="collapse-item" to="/url">
            Element B
          </NavLink>
        </SidebarDropdown>
      </SidebarSectionContextProvider>

      <SidebarSectionContextProvider SectionName="Section 2">
        <SidebarDropdown title="Option 1" icon="fas fa-times">
          <NavLink className="collapse-item" to="/url">
            Element A
          </NavLink>
          <NavLink className="collapse-item" to="/url">
            Element B
          </NavLink>
        </SidebarDropdown>
        <SidebarDropdown title="Option 2" icon="fas fa-cog">
          <NavLink className="collapse-item" to="/url">
            Element A
          </NavLink>
          <NavLink className="collapse-item" to="/url">
            Element B
          </NavLink>
        </SidebarDropdown>
      </SidebarSectionContextProvider>

      <div className="text-center d-none d-md-inline">
        <button
          onClick={handleSidebarToggle}
          className="rounded-circle border-0"
          id="sidebarToggle"
        ></button>
      </div>
    </ul>
  );
};

export default Sidebar;
