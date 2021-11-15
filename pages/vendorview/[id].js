import VendorView from "../../components/VendorView";
import Header from "../../components/Header";
export default function ADdCustomers({venid}) {
  return (
    <div >
      <Header /> 
      <VendorView venid={venid}/>
    </div>
  );
}


export const getServerSideProps = async (context) => {
    return { props: { venid: context.params.id } };
  };