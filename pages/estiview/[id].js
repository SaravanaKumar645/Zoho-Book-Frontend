// estiView
import EstiView from "../../components/EstiView";
import Header from "../../components/Header";
export default function ADdCustomers({estid}) {
  return (
    <div >
      <Header  /> 
      <EstiView estid={estid}/>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  return { props: { estid: context.params.id } };
};