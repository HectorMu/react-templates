import { useContext } from "react";
import { SectionContext } from "../../context/SidebarSectionContextProvider";

const SidebarOption = ({
  OptionName = "New option",
  icon = "fas fa-question",
  children,
}) => {
  const { SectionName } = useContext(SectionContext);

  return (
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target={`#collapse${SectionName.replace(
          " ",
          "-"
        )}${OptionName.replace(" ", "-")}`}
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i className={icon}></i>
        <span>{OptionName}</span>
      </a>
      <div
        id={`collapse${SectionName.replace(" ", "-")}${OptionName.replace(
          " ",
          "-"
        )}`}
        className="collapse"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">{children}</div>
      </div>
    </li>
  );
};

export default SidebarOption;
