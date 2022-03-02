import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LogOutButton() {
  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function logOut() {
    await axios.get("http://localhost:5010/auth/logout");
    await getLoggedIn();
    navigate("/");
  }
  return <button onClick={logOut}>Log Out</button>;
}

export default LogOutButton;
