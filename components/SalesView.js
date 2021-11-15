import React,{useContext,useState,useEffect} from 'react'; 
import User from './context'
import { getSingleSales,getcusBusale } from "../services/Customers";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {postSaleEmail} from '../services/Customers'
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
import "bootstrap/dist/css/bootstrap.min.css";

function SalesView({saleid}) {

    

    
    // const { setUser, user } = useContext(User);
    const [estimateDate , setEstimateDate] = useState("");
    const [sreference , setReference ] = useState("");
    const [itemName , setItemName] = useState("");
    const [quantity , setQuantity] = useState("");
    const [amount , setAmount ] = useState("");

    const [cusname , setcusname ] = useState("");
    const [cwebsite , setWebsite ] = useState("");
    const [pan , setPan ] = useState("");
    const [cur , setCur ] = useState("");
    const [add , setAdd ] = useState("");
    const [pay,setPay] = useState("");
    const [emails,setEmail] = useState("");

console.log(saleid)
// console.log(cusname.Substr(0, indexOf(" ")))
console.log(cusname.split(" ")[0])

useEffect(() => {
  console.log(saleid)
  getcusBusale(cusname.split(" ")[0])
    .then((data) => {
      console.log(data);

      
    })

    .catch(console.log("Get Trpis request"));
}, []);


getSingleSales(saleid).then(data=>{
        if(data){
        //  console.log(data)
            setEstimateDate(data.estimate_date)
            setReference(data.reference)
            setItemName(data.items[0].name)
            setQuantity(data.items[0].quantity)
            setAmount(data.items[0].amount)
            setcusname(data.customer_name)
            setEmail(data.cemail)
          //  setCmobile(data.mobile)
          //  setWebsite(data.website)
          //  setPan(data.pan)
          //  setCur(data.curbalance)
          //  setAdd(data.addre)
          //  setPay(data.paymentT)
          //  console.log(data)
          //  console.log(user)
        }
    })
   console.log(emails)
    const [value, setValue] = React.useState('1');


    // const [values, setValues] = useState({
    //     email:"",
    //     body:"",  
    //   });

    //   const {email,body}=values
    //   console.log(values)

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
          sub:"Sales Bill - Reg",
          customername:cusname,
          estimateDate : estimateDate,
          sreference:sreference,
          itemName:itemName,
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

        const [openAddress, setOpenAddress] = React.useState(false);
        const [openOtherDetails, setOpenOtherDetails] = React.useState(false);
        const [openContactPerson, setOpenContactPerson] = React.useState(false);
        const handleClickAddress = () => {
          setOpenAddress(!openAddress);
        };
        const handleClickOtherDetails = () => {
          setOpenOtherDetails(!openOtherDetails);
        };
        const handleClickContactPerson = () => {
          setOpenContactPerson(!openContactPerson);
        };

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
         {/* <div style={{border:"1.5px solid black", padding:"20px", margin:"2px",width:"450px"}}>
        <h2>Mr. {fname} {lname}</h2>
        <h4>  <b>Custome ID </b> {user ? user:"not Found"}</h4>
            <h6>Customer Name : {cname}</h6>
            <h6>{cmail}</h6>
            <h6>{cphone}</h6>
            <h6>{cmobile}</h6>
            <h6>{cwebsite}</h6>
            <h6>{pan}</h6>

        </div> */}
        {/* <div style={{border:"1px solid black", padding:"20px", margin:"2px",width:"888px"}}> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            

            <div style={{width:"80%", border: "1px solid black"}}>
              <div style={{padding:'20px'}}>
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <p></p>
                    <p style={{fontSize:'40px'}}><b>SALES ORDER</b></p>
                    <p>Sales Order# SO-00001</p>
                  </div>
                </div>
                <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    <p>Bill To</p>
                    <p style={{color:'#0066cc'}}><b>{cusname}</b></p>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <p></p>
                    <p>Order Date : {estimateDate}</p>
                    <p>Ref# : {sreference}</p>
                  </div>
                </div>
                <br />
                <div>
                  <table style={{width:'100%'}}>
                    <tr style={{background:'#3d3d29',color:'#ffffff'}}>
                      <td>#</td>
                      <td>Item & Description</td>
                      <td>Qty</td>
                      <td>Rate</td>
                      <td>Amount</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>{itemName}</td>
                      <td>{quantity}</td>
                      <td>{amount}.00</td>
                      <td>{amount}.00</td>
                    </tr>
                  </table>
                </div>
                <hr />
                <div style={{display:'flex',textAlign:'right'}}>
                  <div style={{paddingLeft:'520px'}}>
                    <p>Sub Total</p>
                    <p><b>Total</b></p>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <p>{amount}.00</p>
                    <p><b>Rs.{amount}.00</b></p>
                  </div>
                </div>
                <br />
                <div>
                  <p>Authorized Signature	_____________________________</p>
                </div>
                <br />
              </div>
            </div>

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

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            

            <div style={{width:"80%", border: "1px solid black"}}>
              <div style={{padding:'20px'}}>
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <p></p>
                    <p style={{fontSize:'40px'}}><b>SALES ORDER</b></p>
                    <p>Sales Order# SO-00001</p>
                  </div>
                </div>
                <br />
                <div className="d-flex justify-content-between" style={{display:'flex'}}>
                  <div>
                    <p>Bill To</p>
                    <p style={{color:'#0066cc'}}><b>company</b></p>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <p></p>
                    <p>Order Date : {estimateDate}</p>
                    <p>Ref# : {sreference}</p>
                  </div>
                </div>
                <br />
                <div>
                  <table style={{width:'100%'}}>
                    <tr style={{background:'#3d3d29',color:'#ffffff'}}>
                      <td>#</td>
                      <td>Item & Description</td>
                      <td>Qty</td>
                      <td>Rate</td>
                      <td>Amount</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>{itemName}</td>
                      <td>{quantity}</td>
                      <td>{amount}.00</td>
                      <td>{amount}.00</td>
                    </tr>
                  </table>
                </div>
                <hr />
                <div style={{display:'flex',textAlign:'right'}}>
                  <div style={{paddingLeft:'520px'}}>
                    <p>Sub Total</p>
                    <p><b>Total</b></p>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <p>{amount}.00</p>
                    <p><b>Rs.{amount}.00</b></p>
                  </div>
                </div>
                <br />
                <div>
                  <p>Authorized Signature	_____________________________</p>
                </div>
                <br />
              </div>
            </div>

          </Grid>
        </Box>
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

export default SalesView;
   