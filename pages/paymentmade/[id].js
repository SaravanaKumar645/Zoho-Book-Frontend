// estiView
import Paymentmadeview from "../../components/Paymentmadeview";
import Header from "../../components/Header";
export default function ADdCustomers({pmv}) {
  return (
    <div >
      <Header  /> 
      <Paymentmadeview pmv={pmv}/>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  return { props: { pmv: context.params.id } };
};