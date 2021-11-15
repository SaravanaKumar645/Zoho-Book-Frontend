import Customers from '../components/Customer';
import Header from '../components/Header';
// import { signin, authenticate, isAutheticated } from "../services/Auth";

function CUstomer({customeritems}) {
  // const { user } = isAutheticated();


    return (
        <div style={{ display: "flex" }}>
            <Header />
            <Customers/>
        </div>
    )
}



// export const getStaticProps = async () => {
 


//   const res = await fetch(`http://localhost:4000/api/customers/61877ec9a8f9091205f3b543`);
//     const data = await res.json();
  
//     return {
//       props: { customeritems: data },
//     };
  // };
export default CUstomer
