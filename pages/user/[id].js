import Users from "../../components/User";
import Header from "../../components/Header";
export default function ADdCustomers({usid}) {
  return (
    <div >
      <Header /> 
      <Users usid={usid}/>
    </div>
  );
}


export const getServerSideProps = async (context) => {
    return { props: { usid: context.params.id } };
  };