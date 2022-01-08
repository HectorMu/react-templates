import React from "react";

export const SectionContext = React.createContext();

const SidebarSectionContextProvider = ({
  SectionName = "New section",
  children,
}) => {
  return (
    <SectionContext.Provider value={{ SectionName }}>
      <div className="sidebar-heading">{SectionName}</div>
      {children}
      <hr className="sidebar-divider" />
    </SectionContext.Provider>
  );
};

export default SidebarSectionContextProvider;