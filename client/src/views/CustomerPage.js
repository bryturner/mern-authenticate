import React from "react";
import CustomerForm from "../components/forms/CustomerForm";
import CustomerList from "../components/lists/CustomerList";

function CustomerPage() {
  return (
    <div>
      <CustomerForm />
      <CustomerList />
    </div>
  );
}

export default CustomerPage;
