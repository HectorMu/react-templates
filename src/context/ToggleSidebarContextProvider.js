import React, { useState } from "react";

export const ToggleSidebarContext = React.createContext();

function ToggleSidebarContextProvider({ children }) {
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
    <ToggleSidebarContext.Provider
      value={{ sidebarToggled, handleSidebarToggle }}
    >
      {children}
    </ToggleSidebarContext.Provider>
  );
}

export default ToggleSidebarContextProvider;
