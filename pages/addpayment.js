import Addpayment from "../components/Addpayment";
import Head from "next/head";
import Header from "../components/Header";

import {isAutheticated} from "../services/Auth"
import {getCus,getventor} from "../services/Customers"
import { useState,useEffect } from "react";
function ADdpayment() {
  const {user} = isAutheticated();

  const [ vendor , setVendor] = useState();
  
    useEffect(() => {
      console.log(user._id)
    
  
  
        getventor(user._id)
        .then((data) => {
          console.log(data);
          setVendor(data);
        })
        .catch(console.log("Get Trpis request"));
  
        
  
    }, []);


  return (
    <div>
      <Head>
        <title>Add Payment </title>
      </Head>
      <Header />
      <Addpayment
      vendor={vendor} />
    </div>
  );items
}
export default ADdpayment;
