import React, { useEffect, useState } from "react";
import { isAutheticated } from "../services/Auth";
import Estimate from "../components/Estimate";
import Header from "../components/Header";
import { getEstiID } from "../services/Customers";

function Estimatess() {
  const [estimatesitems, setestimatesitems] = useState(false);

  useEffect(async () => {
    const { user } = await isAutheticated();
    console.log(user._id);
    getEstiID(user._id)
      .then((data) => {
        console.log(data);
        if (data) {
          console.log("inside estimate.js");
          console.log(data);
          setestimatesitems(data);
        }
      })

      .catch(console.log("Get Trpis request"));
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <Estimate estimatesitems={estimatesitems} />
    </div>
  );
}
// export const getStaticProps = async () => {/api/allestimates/:userid
//     const res = await fetch("http://localhost:4000/estimates");
//     const data = await res.json();

//     return {
//       props: { estimatesitems: data },
//     };
//   };

export default Estimatess;
