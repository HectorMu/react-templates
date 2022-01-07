import React, { useState } from "react";

export const SidebarContext = React.createContext();

function SidebarContextProvider({ children }) {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarToggled(!sidebarToggled);
    if (sidebarToggled) {
      document.body.classList.add("sidebar-toggled");
    } else {
      document.body.classList.remove("sidebar-toggled");
    }
  };
  return (
    <SidebarContext.Provider value={{ sidebarToggled, handleSidebarToggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContextProvider;
