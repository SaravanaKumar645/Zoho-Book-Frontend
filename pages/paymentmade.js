import PaymentMade from "../components/PaymentMade";
import Head from "next/head";
import Header from "../components/Header";
function Paymentmaded() {
  return (
    <div>
      <Head>
        <title>Payment Made </title>
      </Head>
     <Header />
      <PaymentMade />
    </div>
  );
}
export default Paymentmaded;
