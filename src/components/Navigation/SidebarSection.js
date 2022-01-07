const SidebarSection = ({ Name = "New section", children }) => {
  return (
    <>
      <div className="sidebar-heading">{Name}</div>
      {children}
      <hr className="sidebar-divider" />
    </>
  );
};

export default SidebarSection;
