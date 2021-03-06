import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import { RegisterFormStyled } from "../styles/Form.styled";
import { ButtonStyled } from "../styles/Button.styled";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        username,
        password,
        passwordVerify,
      };
      await axios.post("http://localhost:5010/auth/", registerData);
      await getLoggedIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <RegisterFormStyled>
      <h1>Register new account</h1>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="name@email.com"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
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
        <input
          type="password"
          placeholder="verify password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <ButtonStyled type="submit">Register</ButtonStyled>
      </form>
    </RegisterFormStyled>
  );
}

export default RegisterPage;
