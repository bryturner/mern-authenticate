import React, { useState, useEffect } from "react";
import axios from "axios";

function WelcomePage() {
  //   const [welcomeMessage, setWelcomeMessage] = useState("");
  //   async function getUserFirstName() {
  //     const userResponse = await axios.get("http://localhost:5010/auth/");
  //     console.log(userResponse.data);
  //   }

  //   useEffect(() => {
  //     getUserFirstName();
  //   }, []);
  return (
    <div>
      Welcome! Please click the customers link to save new customers and see a
      list of the current customers.
    </div>
  );
}

export default WelcomePage;
