import axios from "axios";
import React, { useState } from "react";
import { formatName } from "../../utilities/helpers";
import { CustomerFormStyled } from "../../styles/Form.styled";
import { ButtonStyled } from "../../styles/Button.styled";

function CustomerForm({ getCustomers }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [stateAbbreviation, setStateAbbreviation] = useState("");
  const [itemPurchased, setItemPurchased] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();

    if (itemPurchased === "") return alert("Please select an item");

    if (stateAbbreviation === "") return alert("Please select a State");

    try {
      const customerData = {
        firstName: formatName(firstName),
        lastName: formatName(lastName),
        stateAbbreviation: stateAbbreviation,
        itemPurchased: itemPurchased,
      };
      await axios.post("http://localhost:5010/customer/", customerData);
      getCustomers();
      setFirstName("");
      setLastName("");
      setStateAbbreviation("");
      setItemPurchased("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <CustomerFormStyled>
      <h2>Save a new customer</h2>
      <form onSubmit={saveCustomer}>
        <input
          type="text"
          placeholder="John"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
          required
          autoFocus
        />
        <input
          type="text"
          placeholder="Doe"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
          required
        />
        <select
          onChange={(e) => {
            setStateAbbreviation(e.target.value);
          }}
          value={stateAbbreviation}
        >
          <option value="">Select State</option>
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AR">AR</option>
          <option value="AZ">AZ</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DC">DC</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="IA">IA</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="MA">MA</option>
          <option value="MD">MD</option>
          <option value="ME">ME</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MO">MO</option>
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="NC">NC</option>
          <option value="NE">NE</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NV">NV</option>
          <option value="NY">NY</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WI">WI</option>
          <option value="WV">WV</option>
          <option value="WY">WY</option>
        </select>
        <select
          onChange={(e) => {
            setItemPurchased(e.target.value);
          }}
          value={itemPurchased}
        >
          <option value="">Select item</option>
          <option value="Pony">Pony</option>
          <option value="Car">Car</option>
          <option value="House">House</option>
        </select>

        <ButtonStyled type="submit">Save Customer</ButtonStyled>
      </form>
    </CustomerFormStyled>
  );
}

export default CustomerForm;
