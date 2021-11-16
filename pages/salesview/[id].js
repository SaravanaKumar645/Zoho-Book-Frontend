// estiView
import SalesView from "../../components/SalesView";
import Header from "../../components/Header";
import { useRouter } from "next/router";
export default function ADdCustomers({ saleid }) {
  const router = useRouter();
  const query = router.query;
  console.log("Inside SalesView ID.js----");
  console.log(query.id);
  return (
    <div>
      <Header />
      <SalesView saleid={query.id} />
    </div>
  );
}
// export const getServerSideProps = async (context) => {
//   return { props: { saleid: context.params.id } };
// };
