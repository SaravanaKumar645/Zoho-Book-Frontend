// estiView
import Invoiceview from "../../components/Invoiceview";
import Header from "../../components/Header";
export default function ADdCustomers({inid}) {
  return (
    <div >
      <Header  /> 
      <Invoiceview inid={inid}/>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  return { props: { inid: context.params.id } };
};