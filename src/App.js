import Aos from "aos";
import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import IsAlreadyLogged from "./components/Authentication/IsAlreadyLogged";
import IsLoggedIn from "./components/Authentication/IsLoggedIn";
import { Layout } from "./components/Global/Layout";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import { Index } from "./pages/Index";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar theme={"secondary"} />
      <Layout>
        <Routes>
          {/* <Route path="/" element={<IsAlreadyLogged view={Index} />} /> */}
          {/* <Route path="/home" element={<IsLoggedIn view={Home} />} /> */}
          <Route path="/" element={Index} />
        </Routes>
      </Layout>
      <Toaster />
    </div>
  );
}

export default App;
