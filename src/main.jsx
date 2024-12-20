import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import About from "./About.jsx";
import Images from "./Images.jsx";
import Service from "./Service.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <Banner />
    <About />
    <Images />
    <Service />
  </>
);
