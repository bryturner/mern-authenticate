import React, { useState } from "react";
// import axios from "axios";

function RegisterPage() {
  return <div>Register</div>;
  //
  //   const [email, setEmail] = useState("");
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [passwordVerify, setPasswordVerify] = useState("");

  //   async function register(e) {
  //     e.preventDefault();

  //     try {
  //       //  Create object with state variable values
  //       const registerData = {
  //
  //         email,
  //         username,
  //         password,
  //         passwordVerify,
  //       };
  //       await axios.post("http://localhost:5010/auth/", registerData);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

  //   return (
  //     <div>
  //       <h1>Register new account</h1>
  //       <form onSubmit={register}>
  //         <input
  //           type="email"
  //           placeholder="name@email.com"
  //           onChange={(e) => setEmail(e.target.value)}
  //           value={email}
  //         ></input>
  //         <input
  //           type="text"
  //           placeholder="username"
  //           onChange={(e) => setUsername(e.target.value)}
  //           value={username}
  //         ></input>
  //
  //         <input
  //           type="password"
  //           placeholder="password"
  //           onChange={(e) => setPassword(e.target.value)}
  //           value={password}
  //         ></input>
  //         <input
  //           type="password"
  //           placeholder="verify password"
  //           onChange={(e) => setPasswordVerify(e.target.value)}
  //           value={passwordVerify}
  //         ></input>
  //         <button type="submit">Submit</button>
  //       </form>
  //     </div>
  //   );
}

export default RegisterPage;
