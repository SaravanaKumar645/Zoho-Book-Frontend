// estiView
import Payview from "../../components/Payview";
import Header from "../../components/Header";
import { useRouter } from "next/router";

export default function ADdCustomers({ payid }) {
  const router = useRouter();
  const query = router.query;
  console.log("Inside PaymentReceived ID.js----");
  console.log(query.id);
  return (
    <div>
      <Header />
      <Payview payid={query.id} />
    </div>
  );
}
// export const getServerSideProps = async (context) => {
//   return { props: { payid: context.params.id } };
// };
