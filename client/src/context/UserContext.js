import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserContextProvider(props) {
  const [userFirstName, setUserFirstName] = useState("");

  async function getUserFirstName(loginId) {
    const userFirstNameResponse = await axios.get(
      "http://localhost:5010/auth/login"
    );
    const users = userFirstNameResponse.data;

    const matchedUser = users.find((user) => {
      const databaseId = user._id;

      if (databaseId === loginId) return user;
    });

    const matchedUserFirstName = matchedUser.firstName;

    setUserFirstName(matchedUserFirstName);
  }

  useEffect(() => {
    getUserFirstName();
  }, []);

  return (
    <UserContext.Provider value={{ userFirstName, getUserFirstName }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
