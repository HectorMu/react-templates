import { useContext } from "react";
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
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Brand</div>
      </a>

      <hr className="sidebar-divider my-0"></hr>
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <hr className="sidebar-divider" />

      <SidebarSection SectionName="Section 1">
        <SidebarOption OptionName="Option 1" icon="fas fa-times">
          <SidebarOptionElement name="Element A" />
          <SidebarOptionElement name="Element B" />
        </SidebarOption>
        <SidebarOption OptionName="Option 2" icon="fas fa-cog">
          <SidebarOptionElement name="Element A" />
          <SidebarOptionElement name="Element B" />
        </SidebarOption>
      </SidebarSection>

      <SidebarSection SectionName="Section 2">
        <SidebarOption OptionName="Option 1" icon="fas fa-times">
          <SidebarOptionElement name="Element A" />
          <SidebarOptionElement name="Element B" />
        </SidebarOption>
        <SidebarOption OptionName="Option 2" icon="fas fa-cog">
          <SidebarOptionElement name="Element A" />
          <SidebarOptionElement name="Element B" />
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
