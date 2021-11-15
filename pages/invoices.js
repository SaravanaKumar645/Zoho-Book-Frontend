import React,{useEffect,useState} from 'react'
import { isAutheticated } from "../services/Auth"

import Invoice from "../components/Invoice";
import Header from "../components/Header";
import {getInvoiceUser} from "../services/Customers"

function Invoices() {
  const {user} = isAutheticated();
  const [invoices , setInvoices] =  useState(false);


  useEffect(() => {
    console.log(user._id)
    getInvoiceUser(user._id)
      .then((data) => {
        console.log(data);
        setInvoices(data);
      })
  
      .catch(console.log("Get Trpis request"));
  }, []);
    
  
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <Invoice invoices={invoices} />
    </div>
  );
}
export default Invoices;
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:4000/invoices");
//   const data = await res.json();

//   return {
//     props: { invoices: data },
//   };
// };

