import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { ButtonStyled } from "../../styles/Button.styled";

function LogOutButton() {
  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function logOut() {
    await axios.get("http://localhost:5010/auth/logout");
    await getLoggedIn();
    navigate("/logout");
  }
  return <ButtonStyled onClick={logOut}>Log Out</ButtonStyled>;
}

export default LogOutButton;
