import Header from "../components/Header";
import Itemtable from "../components/Itemtable";
import { isAutheticated } from "../services/Auth";

export default function Homeitems() {
  return (
    <div>
      <Header />
      <Itemtable />
    </div>
  );
}
// export const getStaticProps = async () => {
//   const {user} = isAutheticated();

//   const res = await fetch(`http://localhost:4000/items/${user._id}`);
//   const data = await res.json();

//   return {
//     props: { items: data },
//   };
// };
