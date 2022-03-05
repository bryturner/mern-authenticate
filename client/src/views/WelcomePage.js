import React, { useContext } from "react";

import UserContext from "../context/UserContext";

function WelcomePage() {
  const { userFirstName } = useContext(UserContext);

  return (
    <div>
      Welcome {userFirstName || ""}! Please click the customers link to save new
      customers and see a list of the current customers.
    </div>
  );
}

export default WelcomePage;
