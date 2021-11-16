// estiView
import Invoiceview from "../../components/Invoiceview";
import Header from "../../components/Header";
import { useRouter } from "next/router";
export default function ADdCustomers({ inid }) {
  s;
  const router = useRouter();
  const query = router.query;
  console.log("Inside Invoice ID.js----");
  console.log(query.id);
  return (
    <div>
      <Header />
      <Invoiceview inid={query.id} />
    </div>
  );
}
// export const getServerSideProps = async (context) => {
//   return { props: { inid: context.params.id } };
// };
