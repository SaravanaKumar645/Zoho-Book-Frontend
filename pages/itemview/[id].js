// estiView
import ItemView from "../../components/ItemView";
import Header from "../../components/Header";
export default function ADdCustomers({itemid}) {
  return (
    <div >
      <Header  /> 
      <ItemView itemid={itemid}/>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  return { props: { itemid: context.params.id } };
};