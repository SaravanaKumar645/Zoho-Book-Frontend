import PaymentReceived from "../components/PaymentReceived";
import Head from "next/head";
import Header from "../components/Header";
function PaymentreciveD() {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <PaymentReceived />
      <Head>
        <title>Payment Received </title>
      </Head>
    </div>
  );
}
export default PaymentreciveD;
