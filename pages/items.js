import Header from "../components/Header";
import Itemtable from "../components/Itemtable";
import { isAutheticated } from "../services/Auth";

export default function Homeitems() {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <Itemtable />
    </div>
  );
}
