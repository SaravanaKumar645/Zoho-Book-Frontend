import Users from "../../components/User";
import Header from "../../components/Header";
import { useRouter } from "next/router";
export default function ADdCustomers({ usid }) {
  const router = useRouter();
  const query = router.query;
  console.log("Inside User ID.js----");
  console.log(query.id);
  return (
    <div>
      <Header />
      <Users usid={query.id} />
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   return { props: { usid: context.params.id } };
// };
