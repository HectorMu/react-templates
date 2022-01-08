import { useContext } from "react";
import { ToggleSidebarContext } from "../../context/ToggleSidebarContextProvider";
import MessagesBadge from "./MessagesBadge";
import NavbarSearchInput from "./NavbarSearchInput";
import NotificationsBadge from "./NotificationsBadge";
import SearchDropdown from "./SearchDropdown";
import SessionDropdown from "./SessionDropdown";

const Navbar = () => {
  const { handleSidebarToggle } = useContext(ToggleSidebarContext);
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={handleSidebarToggle}
      >
        <i className="fa fa-bars"></i>
      </button>
      <NavbarSearchInput />

      <ul className="navbar-nav ml-auto">
        <SearchDropdown />
        <MessagesBadge />
        <NotificationsBadge />
        <SessionDropdown />
      </ul>
    </nav>
  );
};

export default Navbar;
