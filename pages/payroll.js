import React from "react";
import Payroll from "../components/Payroll";
import Header from "../components/Header";

const PayrollPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <Payroll />
    </div>
  );
};

export default PayrollPage;
