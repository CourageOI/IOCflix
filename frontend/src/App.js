import React from "react";
import Home from "./pages/home/Home";
import "./App.scss";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
