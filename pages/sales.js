
import React,{useEffect,useState} from 'react'
import { isAutheticated } from "../services/Auth"
import Header from "../components/Header";
import Sales from "../components/Sales";
import { getSalesUser } from "../services/Customers"
function Saless() {
const [salesitems,setSalesitems] = useState()
const {user} = isAutheticated();
  useEffect(() => {
    console.log(user._id)
    getSalesUser(user._id)
      .then((data) => {
        console.log(data);
        setSalesitems(data);
      })
  
      .catch(console.log("Get Trpis request"));
  }, []);


  return (
    <div style={{ display: "flex" }}>
      <Header />
      <Sales salesitems={salesitems} />
    </div>
  );
}

export default Saless;
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:4000/sales");
//   const data = await res.json();

//   return {
//     props: { salesitems: data },
//   };
// };
