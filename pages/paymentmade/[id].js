// estiView
import Paymentmadeview from "../../components/Paymentmadeview";
import Header from "../../components/Header";
import { useRouter } from "next/router";
export default function ADdCustomers({ pmv }) {
  const router = useRouter();
  const query = router.query;
  console.log("Inside PaymentMade ID.js----");
  console.log(query.id);
  return (
    <div>
      <Header />
      <Paymentmadeview pmv={query.id} />
    </div>
  );
}
// export const getServerSideProps = async (context) => {
//   return { props: { pmv: context.params.id } };
// };
