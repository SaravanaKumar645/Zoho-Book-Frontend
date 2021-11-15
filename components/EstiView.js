import React,{useContext,useState} from 'react'; 
import User from './context'
import { getSingleEsti,postSaleEmail } from "../services/Customers";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {postMail} from '../services/Customers'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import {ExpandLess,ExpandMore} from '@mui/icons-material';
import { Collapse, Link, ListItemButton } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";

function EstiView({estid}) {


    const [name , setname ] = useState();
    const [lname , setLname ] = useState("");

    const [estimateDate , setEstimateDate ] = useState("");
    const [expiryDate , setExpiryDate ] = useState("");
    const [ereference , setReference ] = useState("");
    const [customerName , setCustomerName ] = useState("");
    const [ename , setName ] = useState("");
    const [quantity , setQuantity ] = useState("");
    const [amount , setAmount ] = useState("");
    const [add , setAdd ] = useState("");
    const [pay,setPay] = useState("");
    const [emails,setEmail] = useState("");

   
console.log(estid)
getSingleEsti(estid).then(data=>{
        if(data){
         console.log("success")
            setEstimateDate(data.estimate_date)
            setExpiryDate(data.expiry_date)
            setReference(data.reference)
            setCustomerName(data.customer_name)
            setName(data.items[0].name)
            setQuantity(data.items[0].quantity)
            setAmount(data.items[0].amount)
            setEmail(data.cemail)
          //  setPan(data.pan)
          //  setCur(data.curbalance)
          //  setAdd(data.addre)
          //  setPay(data.paymentT)
          // setname(data)
        }
    })

    console.log(name);
   
    const [value, setValue] = React.useState('1');


    const [values, setValues] = useState({
        email:"",
        body:"",  
      });

      const {email,body}=values
      console.log(values)

    const handleChanges = (event, newValue) => {
      setValue(newValue);
    };
   
    
    const handleChange = name => event => {
      setValues({ ...values,[name]:event.target.value});
    };
    const handleSubmits = (e) => {
        e.preventDefault();
        const content={
          
          // email:"kgokulakannan49@gmail.com",
          sub:"Estimate Bill - Reg",
          customername:customerName,
          estimateDate : estimateDate,
          sreference:ereference,
          itemName:ename,
          quantity:quantity,
          amount:amount
            }

            const user = {
              content:content
            }
            console.log(user)
            postSaleEmail(user,emails).then(data=>{
              alert("mail sended sussesfully")

              console.log(data)
              
          }).catch((err)=>console.log(err))

        }


        const Item = styled(Paper)(({ theme }) => ({
          ...theme.typography.body2,
          padding: theme.spacing(1),
          // textAlign: 'center',
          borderRadius:'0px',
          color: theme.palette.text.secondary,
        }));


    return (
        <>
    
        <div style={{marginLeft:'280px', marginTop:'80px'}}>
        <h2></h2>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChanges} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            {/* <Tab label="Comments" value="2" /> */}
            <Tab label="mails" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
         
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <table style={{width:"90%", border: "1px solid grey",borderCollapse: "collapse"}}>
                <tr style={{border: "1px solid grey",backgroundColor:"#97a9ac"}}>
                <td colspan="4" style={{border: "1px solid grey",borderCollapse: "collapse",padding:"10px"}} >
                <b>Codingmart</b> <br/>
                Tamil nadu <br/> 
                India</td>
                <th><h2 style={{padding:"10px"}}>ESTIMATE</h2></th>
              </tr>

                <tr style={{border: "1px solid grey",borderCollapse: "collapse",padding:"15px"}} >
                <td colspan="2" style={{padding:"15px"}}>
                  #             :  EST-000001<br/>
                  Estimate Date :  {estimateDate}<br/>
                  Expiry Date   :  {expiryDate}<br/>
                  Reference#    :  {ereference}
                  </td>
                </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse" ,backgroundColor:"#97a9ac"}} >
                <td colspan="5"style={{padding:"10px"}}><b>Bill to</b></td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse",color:"#5c6f80"}} >
                <td style={{padding:"10px"}}><b>{customerName}</b></td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse",backgroundColor:"#97a9ac"}} >
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b>#</b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b>Item&Description</b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b> Qty </b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b> Rate </b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b> Amount </b></td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse"}} > 
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>1</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>{ename}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>{quantity}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>Rs {amount}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>Rs {amount}</td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse"}}>
                <td rowspan="2" style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>
                  <br/>
                <i><b></b></i> <br/>
                <br/>
                Looking forward for your business.</td>
                <td style={{textAlign:"right"}} >
            Sub Total :	Rs {amount}<br/>
            {/* Discount	: Rs 0.00<br/> */}
            Total	    : Rs.{amount}
            </td>
              </tr>
              <tr>
                <td style={{paddingTop:"70px",textAlign: "center"}}><b>&nbsp;Authorized Signature</b></td>
              </tr>
            </table>
          </Grid>
        </Box>

        
        </TabPanel>
        <TabPanel value="2">
        <TextareaAutosize
      aria-label="minimum height"
      minRows={6}
      placeholder="Enter your comments"
      style={{ width: 400 }}
    />
    <br/>
    <button
                id="ember1447"
                className="btn btn-primary ember-view"
                type="submit">Save</button>
        </TabPanel>
        <TabPanel value="3">
          <form onSubmit={handleSubmits}>
            
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} >
          
            <label for="exampleFormControlInput1">From</label>
            <input type="email" class="form-control col-7" id="exampleFormControlInput1" placeholder="name@example.com" value="techpiratesteam@gmail.com"/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
            <label for="exampleFormControlInput1">Send To</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                        value={emails} onChange={handleChange("email")}/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
            <label for="exampleFormControlInput1">Cc</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} > 
            <label for="exampleFormControlInput1">Subject</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Account Statement from 01/11/2021 to 30/11/2021"/>
          </div>
          <div class="form-group" style={{padding:"10px", display:"flex", flexDirection:"column"}} >
            <label for="exampleFormControlTextarea1">Message</label>
            <table style={{width:"90%", border: "1px solid grey",borderCollapse: "collapse"}}>
                <tr style={{border: "1px solid grey",backgroundColor:"#97a9ac"}}>
                <td colspan="4" style={{border: "1px solid grey",borderCollapse: "collapse",padding:"10px"}} >
                <b>Codingmart</b> <br/>
                Tamil nadu <br/> 
                India</td>
                <th><h2 style={{padding:"10px"}}>ESTIMATE</h2></th>
              </tr>

                <tr style={{border: "1px solid grey",borderCollapse: "collapse",padding:"15px"}} >
                <td colspan="2" style={{padding:"15px"}}>
                  #             :  EST-000001<br/>
                  Estimate Date :  {estimateDate}<br/>
                  Expiry Date   :  {expiryDate}<br/>
                  Reference#    :  {ereference}
                  </td>
                </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse" ,backgroundColor:"#97a9ac"}} >
                <td colspan="5"style={{padding:"10px"}}><b>Bill to</b></td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse",color:"#5c6f80"}} >
                <td style={{padding:"10px"}}><b>{customerName}</b></td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse",backgroundColor:"#97a9ac"}} >
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b>#</b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b>Item&Description</b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b> Qty </b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b> Rate </b></td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}><b> Amount </b></td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse"}} > 
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>1</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>{ename}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>{quantity}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>Rs {amount}</td>
                <td style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>Rs {amount}</td>
              </tr>

              <tr style={{border: "1px solid grey",borderCollapse: "collapse"}}>
                <td rowspan="2" style={{border: "1px solid grey",borderCollapse: "collapse",padding:"8px"}}>
                  <br/>
                <i><b></b></i> <br/>
                <br/>
                Looking forward for your business.</td>
                <td style={{textAlign:"right"}} >
            Sub Total :	Rs {amount}<br/>
            {/* Discount	: Rs 0.00<br/> */}
            Total	    : Rs.{amount}
            </td>
              </tr>
              <tr>
                <td style={{paddingTop:"70px",textAlign: "center"}}><b>&nbsp;Authorized Signature</b></td>
              </tr>
            </table>
          </div>
          
          <div style={{padding:"10px" ,textAlign:"center"}} >
          <button type="submit" class="btn btn-primary btn-lg">Send</button>

          </div>
          
        </form>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
         </>
    )
}

export default EstiView;
   