import Addbill from "../components/Addbill";
import Head from "next/head";
import Header from "../components/Header";
import {isAutheticated} from "../services/Auth"
import {getCus,getItem} from "../services/Customers"
import { useState,useEffect } from "react";
function ADdbill() {

  const {user} = isAutheticated();

  const [ customers , setcustomers] = useState();
  const [ items , setitems] = useState();
  
    useEffect(() => {
      console.log(user._id)
      getCus(user._id)
        .then((data) => {
          console.log(data);
          setcustomers(data);
        })
  
  
        .catch(console.log("Get Trpis request"));
  
  
        getItem(user._id)
        .then((data) => {
          console.log(data);
          setitems(data);
        })
        .catch(console.log("Get Trpis request"));
  
        
  
    }, []);

  
  return (
    <div>
      <Head>
        <title>Add Bill </title>
      </Head>
      <Header />
      <Addbill 
      customers={customers}
        items={items} />
    </div>
  );
}
export default ADdbill;
