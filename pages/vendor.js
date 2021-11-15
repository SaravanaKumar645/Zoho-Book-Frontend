import Header from '../components/Header';
import Vendor from '../components/Vendor';


import React,{useEffect,useState} from 'react'
import { isAutheticated } from "../services/Auth"
import { getUserventor } from "../services/Customers"

function Vendors() {

    const {user} = isAutheticated();
    const [vendorsitems , Setvendorsitems] =  useState(false);
  
  
    useEffect(() => {
      console.log(user._id)
      getUserventor(user._id)
        .then((data) => {
          console.log(data);
          Setvendorsitems(data);
        })
    
        .catch((err)=>{
          console.log(err)
        });
    }, []);
      
    return (
        <div style={{ display: "flex" }}>
            <Header />
            <Vendor vendorsitems={vendorsitems}/>
        </div>
    )
}
export default Vendors;
// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:4000/vendors");
//     const data = await res.json();
  
//     return {
//       props: { vendorsitems: data },
//     };
//   };

