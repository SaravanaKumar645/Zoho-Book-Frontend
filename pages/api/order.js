const Razorpay = require("razorpay");
async function handler(req,res){
    if(req.method ==='POST'){
    const amount = req.body.amount;

  var instance = new Razorpay({
    key_id: "rzp_test_y4W1122UkV5IdU",
    key_secret: "fYHOdPqhSl5wH8ENcbvPKzyA"
    // this needs to go in .env
  });

  var options = {
    amount: amount *100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  const myOrder = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    amount,
    order: myOrder
  });
}
}
export default handler;