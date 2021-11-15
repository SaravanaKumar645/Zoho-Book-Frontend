import Form from "../components/Form";
import Header from "../components/Header";
import {isAutheticated} from "../services/Auth"
import {getCus,getItem} from "../services/Customers"
import { useState,useEffect } from "react";
export default function NEwEstimate() {
 
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
    <div style={{ display: "flex" }}>
      <Header />

      <Form
        title="invoice"
        additional="invoice"
        customers={customers}
        items={items}
      />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const customersData = await fetch("http://localhost:4000/customers");
//   const customersJSON = await customersData.json();

//   const itemsData = await fetch("http://localhost:4000/items");
//   const itemsJSON = await itemsData.json();

//   return {
//     props: { customers: customersJSON, items: itemsJSON },
//   };
// };
