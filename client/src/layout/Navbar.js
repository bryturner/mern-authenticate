import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../components/buttons/LogOutButton";
import AuthContext from "../context/AuthContext";
import { NavbarStyled } from "../styles/Navbar.styled";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <NavbarStyled>
      {loggedIn === false && (
        <>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/welcome">Home</Link>
          <Link to="/customer">Customers</Link>
          <LogOutButton />
        </>
      )}
    </NavbarStyled>
  );
}

export default Navbar;
