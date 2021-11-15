// estiView
import SalesView from "../../components/SalesView";
import Header from "../../components/Header";
export default function ADdCustomers({saleid}) {
  return (
    <div >
      <Header  /> 
      <SalesView saleid={saleid}/>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  return { props: { saleid: context.params.id } };
};