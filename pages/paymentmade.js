import PaymentMade from "../components/PaymentMade";
import Head from "next/head";
import Header from "../components/Header";
function Paymentmaded() {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <PaymentMade />
    </div>
  );
}
export default Paymentmaded;
