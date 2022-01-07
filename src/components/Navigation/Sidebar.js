import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContextProvider";
import SidebarOption from "./SidebarOption";
import SidebarOptionElement from "./SidebarOptionElement";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
  const { sidebarToggled, handleSidebarToggle } = useContext(SidebarContext);

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

      <SidebarSection Name="Section 1">
        <SidebarOption Name="Option 1" icon="fas fa-times">
          <SidebarOptionElement Name="Element A" to="/url" />
          <SidebarOptionElement Name="Element B" to="/url" />
        </SidebarOption>
        <SidebarOption Name="Option 2" icon="fas fa-cog">
          <SidebarOptionElement Name="Element A" to="/url" />
          <SidebarOptionElement Name="Element B" to="/url" />
        </SidebarOption>
      </SidebarSection>

      <SidebarSection Name="Section 2">
        <SidebarOption Name="Option 1">
          <SidebarOptionElement Name="Element A" />
          <SidebarOptionElement Name="Element B" />
        </SidebarOption>
        <SidebarOption Name="Option 2">
          <SidebarOptionElement Name="Element A" />
          <SidebarOptionElement Name="Element B" />
        </SidebarOption>
      </SidebarSection>

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
