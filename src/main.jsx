import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
//NAVBAR
import Navbar from "./components/navbar";
//ROTAS
import Home from "./routes/home";
import Campanha from "./routes/campanha";
import Deuses from "./routes/deuses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/campanha",
    element: <Campanha />,
  },
  {
    path: "deuses",
    element: <Deuses />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
