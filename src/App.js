import Aos from "aos";
import { useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.min.css";
import "./css/main.css";
import "../node_modules/aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import IsAlreadyLogged from "./components/Authentication/IsAlreadyLogged";
import IsLoggedIn from "./components/Authentication/IsLoggedIn";
import Layout from "./components/Global/Layout";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Sidebar from "./components/Navigation/Sidebar";
import SidebarContextProvider from "./context/SidebarContextProvider";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="wrapper">
      <SidebarContextProvider>
        <Sidebar />
        <Layout>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<IsAlreadyLogged view={Index} />} /> */}
            {/* <Route path="/home" element={<IsLoggedIn view={Home} />} /> */}
            <Route path="/" element={<Index />} />
          </Routes>
        </Layout>
        <Toaster />
      </SidebarContextProvider>
    </div>
  );
}

export default App;
