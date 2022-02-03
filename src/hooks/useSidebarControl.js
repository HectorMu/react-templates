import { useContext } from "react";
import { ToggleSidebarContext } from "../context/ToggleSidebarContextProvider";
const useSidebarControl = () => {
  return useContext(ToggleSidebarContext);
};

export default useSidebarControl;
