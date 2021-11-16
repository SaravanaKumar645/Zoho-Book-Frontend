// estiView
import EstiView from "../../components/EstiView";
import Header from "../../components/Header";
import { useRouter } from "next/router";
export default function ADdCustomers({ estid }) {
  const router = useRouter();
  const query = router.query;
  console.log("Inside Estimate ID.js----");
  console.log(query.id);
  return (
    <div>
      <Header />
      <EstiView estid={query.id} />
    </div>
  );
}
// export const getServerSideProps = async (context) => {
//   return { props: { estid: context.params.id } };
// };
