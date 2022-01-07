import { Link } from "react-router-dom";

const SidebarOptionElement = ({ name = "New element", to = "/" }) => {
  return (
    <Link className="collapse-item" to={to}>
      {name}
    </Link>
  );
};

export default SidebarOptionElement;
