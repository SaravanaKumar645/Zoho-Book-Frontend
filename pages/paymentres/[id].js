// estiView
import Payview from "../../components/Payview";
import Header from "../../components/Header";
export default function ADdCustomers({payid}) {
  return (
    <div >
      <Header  /> 
      <Payview payid={payid}/>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  return { props: { payid: context.params.id } };
};