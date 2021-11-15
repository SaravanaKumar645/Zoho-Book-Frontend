// import Form from "../components/Form";
// import Header from "../components/Header";
// import {isAutheticated} from "../services/Auth"
// import {getCus,getItem} from "../services/Customers"
// import { useState,useEffect } from "react";
// // import Link from 'next/link'
// export default function newEstimate() {
//   const {user} = isAutheticated();

// const [ customers , setcustomers] = useState();
// const [ items , setitems] = useState();

//   useEffect(() => {
//     console.log(user._id)
//     getCus(user._id)
//       .then((data) => {
//         console.log(data);
//         setcustomers(data);
//       })


//       .catch(console.log("Get Trpis request"));


//       getItem(user._id)
//       .then((data) => {
//         console.log(data);
//         setitems(data);
//       })
//       .catch(console.log("Get Trpis request"));

      

//   }, []);

//   return (
//     <div>
//       {/* <Link href={`/addestimates/61862cc832d08f3d38369c0f`} > */}
      
      
//       <Header />
//       <Form
//         title="New Estimate"
//         additional="Estimates"
//         customers={customers}
//         items={items}
//       />
//       {/* </Link> */}
//     </div>
//   );
// }
// // /api/customers/:userid




// // export const getStaticProps = async (params) => {
// //   // const customersData = await fetch(`http://localhost:4000/api/customers/${params.id}`);
// //   // const customersJSON = await customersData.json();

// //   // const itemsData = await fetch(`http://localhost:4000/itemall/${params.id}`);
// //   // const itemsJSON = await itemsData.json();

// //   return {
// //     props: { customers: customersJSON, items: itemsJSON },
// //   };
// // };

import NewEstimate from "../components/addestimate"
const addestimate = () => {
  return (
    <div>
      <NewEstimate/>
    </div>
  )
}

export default addestimate

