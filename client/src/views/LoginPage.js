import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import { LoginFormStyled } from "../styles/Form.styled";
import { ButtonStyled } from "../styles/Button.styled";
import UserContext from "../context/UserContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const { getUserFirstName } = useContext(UserContext);
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        username,
        password,
      };
      await axios
        .post("http://localhost:5010/auth/login", loginData)
        .then((res) => getUserFirstName(res.data));
      await getLoggedIn();
      navigate("/welcome");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <LoginFormStyled>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <ButtonStyled type="submit">Login</ButtonStyled>
      </form>
    </LoginFormStyled>
  );
}

export default LoginPage;
