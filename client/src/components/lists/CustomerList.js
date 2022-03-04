import React from "react";
import { CustomerListStyled } from "../../styles/List.styled";

function CustomerList({ customers }) {
  function renderCustomers() {
    return customers.map((customer, i) => {
      return (
        <li key={i}>
          <p>
            {customer.firstName}, {customer.lastName},{" "}
            {customer.stateAbbreviation}, {customer.itemPurchased}
          </p>
        </li>
      );
    });
  }

  return (
    <CustomerListStyled>
      <h3>Current Customer List</h3>
      <ul>{renderCustomers()}</ul>
    </CustomerListStyled>
  );
}

export default CustomerList;
