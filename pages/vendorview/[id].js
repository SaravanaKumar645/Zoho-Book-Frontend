import VendorView from "../../components/VendorView";
import Header from "../../components/Header";
import { useRouter } from "next/router";
export default function ADdCustomers({ venid }) {
  const router = useRouter();
  const query = router.query;
  console.log("Inside VendorView ID.js----");
  console.log(query.id);
  return (
    <div>
      <Header />
      <VendorView venid={query.id} />
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   return { props: { venid: context.params.id } };
// };
