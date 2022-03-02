import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import CustomerPage from "./views/CustomerPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/customer" element={<CustomerPage />} />
    </Routes>
  );
}

export default Router;
