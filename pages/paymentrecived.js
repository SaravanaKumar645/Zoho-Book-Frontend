import PaymentReceived from "../components/PaymentReceived";
import Head from "next/head";
import Header from "../components/Header";
function PaymentreciveD() {
  return (
    <div>
      <Head>
        <title>Payment Recived </title>
      </Head>
      <Header />
      <PaymentReceived />
    </div>
  );
}
export default PaymentreciveD;
