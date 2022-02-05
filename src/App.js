import React from "react"
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
import ToggleSidebarContextProvider from "./context/ToggleSidebarContextProvider";
import NotFound from "./pages/status/NotFound";
import { Login } from "./pages/Auth/Login";

function App() {
  //Initializing AOS for animations
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="wrapper">
      <ToggleSidebarContextProvider>
        <Sidebar />
        <Layout>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<IsAlreadyLogged view={Index} />} /> */}
            {/* <Route path="/home" element={<IsLoggedIn view={Home} />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster />
      </ToggleSidebarContextProvider>
    </div>
  );
}

export default App;
