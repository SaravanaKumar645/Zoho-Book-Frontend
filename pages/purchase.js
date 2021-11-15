import Header from '../components/Header';
import Purchase from '../components/Purchase';

import {getPurchasebyuser} from "../services/Customers"
import React,{useEffect,useState} from 'react'
import { isAutheticated } from "../services/Auth"


function Purchases() {

    const {user} = isAutheticated();
    const [purchaseitems , setPurchaseitems] =  useState(false);
  
  
    useEffect(() => {
    //   console.log(user._id)
    getPurchasebyuser(user._id)
        .then((data) => {
          console.log(data);
          setPurchaseitems(data);
        })
    
        .catch(console.log("Get Trpis request"));
    }, []);
      
    return (
        <div style={{ display: "flex" }}>
            <Header />
            <Purchase purchaseitems={purchaseitems}/>
        </div>
    )
}
export default Purchases;
// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:4000/purchases");
//     const data = await res.json();
  
//     return {
//       props: { purchaseitems: data },
//     };
//   };

