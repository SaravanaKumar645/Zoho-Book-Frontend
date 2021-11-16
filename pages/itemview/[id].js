// estiView
import ItemView from "../../components/ItemView";
import Header from "../../components/Header";
import { useRouter } from "next/router";
export default function ADdCustomers({ itemid }) {
  const router = useRouter();
  const query = router.query;
  console.log("Inside ItemView ID.js----");
  console.log(query.id);
  return (
    <div>
      <Header />
      <ItemView itemid={query.id} />
    </div>
  );
}
// export const getServerSideProps = async (context) => {
//   return { props: { itemid: context.params.id } };
// };
