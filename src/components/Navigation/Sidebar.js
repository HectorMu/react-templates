import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleSidebarContext } from "../../context/ToggleSidebarContextProvider";

import SidebarOption from "./SidebarOption";
import SidebarSectionContextProvider from "../../context/SidebarSectionContextProvider";

const Sidebar = () => {
  const { sidebarToggled, handleSidebarToggle } =
    useContext(ToggleSidebarContext);

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
        sidebarToggled ? `toggled` : ``
      }`}
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Brand</div>
      </Link>

      <hr className="sidebar-divider my-0"></hr>
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />

      <SidebarSectionContextProvider SectionName="Section 1">
        <SidebarOption OptionName="Option 1" icon="fas fa-times">
          <Link className="collapse-item" to="/url">
            Element A
          </Link>
          <Link className="collapse-item" to="/url">
            Element B
          </Link>
        </SidebarOption>
        <SidebarOption OptionName="Option 2" icon="fas fa-cog">
          <Link className="collapse-item" to="/url">
            Element A
          </Link>
          <Link className="collapse-item" to="/url">
            Element B
          </Link>
        </SidebarOption>
      </SidebarSectionContextProvider>

      <SidebarSectionContextProvider SectionName="Section 2">
        <SidebarOption OptionName="Option 1" icon="fas fa-times">
          <Link className="collapse-item" to="/url">
            Element A
          </Link>
          <Link className="collapse-item" to="/url">
            Element B
          </Link>
        </SidebarOption>
        <SidebarOption OptionName="Option 2" icon="fas fa-cog">
          <Link className="collapse-item" to="/url">
            Element A
          </Link>
          <Link className="collapse-item" to="/url">
            Element B
          </Link>
        </SidebarOption>
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
