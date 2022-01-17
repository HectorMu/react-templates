import { Link } from "react-router-dom";

const SidebarLink = ({
  title = "Sidebar link",
  to = "/",
  icon = "fas fa-question",
}) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={to}>
        <i className={icon}></i>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default SidebarLink;
