import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import CustomerPage from "../views/CustomerPage";
import WelcomePage from "../views/WelcomePage";
import Navbar from "../layout/Navbar";
import AuthContext from "../context/AuthContext";
import { BodyContainer } from "../styles/Container.styled";
import LogoutPage from "../views/LogoutPage";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <BodyContainer>
        <Navbar />
        <Routes>
          {loggedIn === false && (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
            </>
          )}
          {loggedIn === true && (
            <>
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/customer" element={<CustomerPage />} />
            </>
          )}
        </Routes>
      </BodyContainer>
    </>
  );
}

export default Router;
