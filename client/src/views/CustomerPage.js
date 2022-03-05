import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerForm from "../components/forms/CustomerForm";
import CustomerList from "../components/lists/CustomerList";
import { CustomerContainer } from "../styles/Container.styled";

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
    <CustomerContainer>
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </CustomerContainer>
  );
}

export default CustomerPage;
