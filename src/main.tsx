import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "animate.css";
import "loaders.css";

import "./sass/style.scss";
import Layout from "./components/Layout/index.tsx";
import Home from "./components/Home/index.tsx";
import About from "./components/About/index.tsx";
import Contact from "./components/Contact/index.tsx";
import Skill from "./components/Skill/index.tsx";
import Experience from "./components/Experience/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/skills",
        element: <Skill />,
      },
      {
        path: "/experiences",
        element: <Experience />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
