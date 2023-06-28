import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
//NAVBAR
import Navbar from "./components/navbar";
//ROTAS
import Home from "./routes/home";
import Campanha from "./routes/campanha";
import Deuses from "./routes/deuses";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="campanha" element={<Campanha />} />
      <Route path="deuses" element={<Deuses />} />
      <Route path="*" element={<div>página não encontrada :(</div>} />
    </Routes>
  </HashRouter>
);
