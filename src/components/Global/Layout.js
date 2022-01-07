const Layout = ({ children }) => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">{children}</div>
    </div>
  );
};
export default Layout;
