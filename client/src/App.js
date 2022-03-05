import React from "react";

import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import GlobalStyle from "./styles/Global.styled";
import { UserContextProvider } from "./context/UserContext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
