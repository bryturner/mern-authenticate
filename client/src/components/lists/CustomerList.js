import React from "react";

function CustomerList({ customers }) {
  function renderCustomers() {
    return customers.map((customer, i) => {
      return (
        <li key={i}>
          <p>
            {customer.firstName}, {customer.lastName},
            {customer.stateAbbreviation}, {customer.itemPurchased}
          </p>
        </li>
      );
    });
  }

  return (
    <div>
      <ul>{renderCustomers()}</ul>
    </div>
  );
}

export default CustomerList;
