import Aos from "aos";
import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Global/Layout";
import Navbar from "./components/Navigation/Navbar";
import Template from "./routes/Template";

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

          {Template.dev.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
      <Toaster />
    </div>
  );
}

export default App;
