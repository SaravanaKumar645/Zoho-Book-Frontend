 const nodemailer =require("nodemailer");
 async function handler(req,res){
    if(req.method ==='POST'){
        let {email}= req.body;
        var transport = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"dgowthamsafe@gmail.com",
                pass:"gowtham1612"
            }
        });
        await transport.sendMail({
            from:"dgowthamsafe@gmail.com",
            to:email,
            subject:"hi",
            text:"hi"
        },(error,info)=>{GET
            if(error){
                console.log(error)
            }
            else{
                console.log(info.response)
                // res.status(200).json({message:info.response})
            }
        })

    }

}
export default handler;