import { useState } from "react";
const SidebarOption = ({
  Name = "New option",
  icon = "fas fa-question",
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleNavlinkCollapse = () => setIsCollapsed(!isCollapsed);
  return (
    <li className="nav-item">
      <a
        onClick={handleNavlinkCollapse}
        className={`nav-link ${
          isCollapsed ? `animated-grow-down` : `collapsed `
        } `}
        data-toggle="collapse"
        aria-expanded={isCollapsed ? true : false}
        href="#none"
      >
        <i className={icon}></i>
        <span>{Name}</span>
      </a>
      <div className={`collapse ${isCollapsed ? `show` : ``} `}>
        <div className="bg-white py-2 collapse-inner rounded">{children}</div>
      </div>
    </li>
  );
};

export default SidebarOption;
