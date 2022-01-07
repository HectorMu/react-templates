const SidebarSection = ({ SectionName = "New section", children }) => {
  return (
    <>
      <div className="sidebar-heading">{SectionName}</div>

      {children}
      <hr className="sidebar-divider" />
    </>
  );
};

export default SidebarSection;
