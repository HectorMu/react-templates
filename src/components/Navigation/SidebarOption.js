const SidebarOption = ({
  OptionName = "New option",
  icon = "fas fa-question",
  SectionName,
  children,
}) => {
  console.log(SectionName);
  return (
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="#a"
        data-toggle="collapse"
        data-target={`#collapse${OptionName.replace(" ", "-")}`}
        aria-expanded="true"
        aria-controls={`collapse${OptionName}`}
      >
        <i className={icon}></i>
        <span>{OptionName}</span>
      </a>
      <div
        id={`collapse${OptionName.replace(" ", "-")}`}
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Elements:</h6>
          {children}
        </div>
      </div>
    </li>
  );
};

export default SidebarOption;
