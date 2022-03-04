import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import CustomerPage from "../views/CustomerPage";
import Navbar from "../layout/Navbar";
import AuthContext from "../context/AuthContext";
import { BodyContainer } from "../styles/Container.styled";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <BodyContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {loggedIn === false && (
            <>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </>
          )}
          {loggedIn === true && (
            <>
              <Route path="/customer" element={<CustomerPage />} />
            </>
          )}
        </Routes>
      </BodyContainer>
    </>
  );
}

export default Router;
