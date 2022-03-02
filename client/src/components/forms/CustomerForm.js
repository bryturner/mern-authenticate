import axios from "axios";
import React, { useState } from "react";

function CustomerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [stateAbbreviation, setStateAbbreviation] = useState("");
  const [itemPurchased, setItemPurchased] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();

    try {
      const customerData = {
        firstName: firstName,
        lastName: lastName,
        stateAbbreviation: stateAbbreviation,
        itemPurchased: itemPurchased,
      };
      await axios.post("http://localhost:5010/customer/", customerData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h2>Save a new customer</h2>
      <form onSubmit={saveCustomer}>
        <input
          type="text"
          placeholder="John"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Doe"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
        />
        <input
          type="text"
          placeholder="CO"
          maxLength="2"
          onChange={(e) => {
            setStateAbbreviation(e.target.value);
          }}
          value={stateAbbreviation}
        />
        <select
          onChange={(e) => {
            setItemPurchased(e.target.value);
          }}
          value={itemPurchased}
        >
          <option value="Pony">Pony</option>
          <option value="Car">Car</option>
          <option value="House">House</option>
        </select>

        <button type="submit">Save Customer</button>
      </form>
    </div>
  );
}

export default CustomerForm;
