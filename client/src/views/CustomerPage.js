import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerForm from "../components/forms/CustomerForm";
import CustomerList from "../components/lists/CustomerList";

function CustomerPage() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customerResponse = await axios.get("http://localhost:5010/customer/");
    setCustomers(customerResponse.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
}

export default CustomerPage;
