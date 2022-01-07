const SidebarOptionElement = ({ name = "New element" }) => {
  return (
    <a className="collapse-item" href="#xd">
      {name}
    </a>
  );
};

export default SidebarOptionElement;
