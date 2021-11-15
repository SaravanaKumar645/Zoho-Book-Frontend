import React,{useContext,useState} from 'react'; 
import User from './context'
import { getUserInvoice ,postSaleEmail} from "../services/Customers";
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

function InvoiceView({inid}) {

    

    
    const { setUser, user } = useContext(User);
    const [customerName , setCustomerName] = useState("");
    const [total , setTotal ] = useState("");
    const [invoiceDate , setInvoiceDate] = useState("");
    const [dueDate , setDueDate] = useState("");
    const [cmail , setCmail ] = useState("");
    const [cphone , setCphone ] = useState("");
    const [cmobile , setCmobile ] = useState("");
    const [cwebsite , setWebsite ] = useState("");
    const [pan , setPan ] = useState("");
    const [cur , setCur ] = useState("");
    const [add , setAdd ] = useState("");
    const [ids,setPay] = useState("");
    const [iname,setIname] = useState("");

console.log(inid)
getUserInvoice(inid).then(data=>{
        if(data){
         console.log("success")
         setCustomerName(data.customer_name)
         setTotal(data.total)
         setInvoiceDate(data.invoice_date)
         setDueDate(data.due_date)
         setCmail(data.cemail)
         setIname(data.items[0].name)

         
          //  setCphone(data.work_phone)
          //  setCmobile(data.mobile)
          //  setWebsite(data.website)
          //  setPan(data.pan)
          //  setCur(data.curbalance)
          //  setAdd(data.addre)
          //  setPay(data.paymentT)
           console.log(data)
        }
    })
   
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
            sub:"Invoice Confirmation - Reg",
            customername:customerName,
            estimateDate : invoiceDate,
            sreference:`IN - ${inid.slice(4, 8)}`,
            itemName:iname,
            quantity:"1",
            amount:total
              }
  
              const user = {
                content:content
              }
              console.log(user)
              postSaleEmail(user,cmail).then(data=>{
                alert(data)

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
         

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <div style={{width:"80%", border: "1px solid grey"}}>
              <div style={{width:"100%",padding:'10px 50px',background:'#3399ff'}}>
                <p style={{color:'#ffffff',fontSize:'20px',textAlign:'center'}}>Invoice #INV-000002</p>
              </div>
              <div style={{width:"100%",padding:'0px 150px',}}>
                <br />
                <p>Dear {customerName},</p>
                <p>Thank you for your business. Your invoice can be viewed, printed and downloaded as PDF from the link below. You can also choose to pay it online.</p>
                <br />
                <div style={{border: "1px solid #ffbf80"}}>
                  <div style={{width:"100%",padding:'10px 50px',background:'#ffe6e6',}}>
                    <div style={{textAlign:'center'}}>
                      <p style={{fontSize:'17px'}}><b>INVOICE AMOUNT</b></p>
                      <p style={{fontSize:'20px',color:'#ff0000'}}>Rs.{total}</p>
                    </div>
                    <hr />
                    <div style={{display:'flex',justifyContent:'center'}}>
                      <div>
                        <p>Invoice No</p>
                        <p>Invoice Date</p>
                        <p>Due Date</p>
                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <p><b>INV-000002</b></p>
                        <p><b>{invoiceDate}</b></p>
                        <p><b>{dueDate}</b></p>
                      </div>
                    </div>
                    <br />
                    <div style={{textAlign:'center'}}>
                      <button style={{padding:'10px 40px', background:'#33cc33', color:'#ffffff', fontSize:'15px'}}>PAY NOW</button>
                    </div>
                    <br />
                  </div>
                </div>
                <br />
                <div>
                  <p><b>Regards,</b><br/>
                  codingmart</p>
                </div>
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
                        value={cmail} onChange={handleChange("email")}/>
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
          <div style={{width:"80%", border: "1px solid grey"}}>
              <div style={{width:"100%",padding:'10px 50px',background:'#3399ff'}}>
                <p style={{color:'#ffffff',fontSize:'20px',textAlign:'center'}}>Invoice #INV-000002</p>
              </div>
              <div style={{width:"100%",padding:'0px 150px',}}>
                <br />
                <p>Dear {customerName},</p>
                <p>Thank you for your business. Your invoice can be viewed, printed and downloaded as PDF from the link below. You can also choose to pay it online.</p>
                <br />
                <div style={{border: "1px solid #ffbf80"}}>
                  <div style={{width:"100%",padding:'10px 50px',background:'#ffe6e6',}}>
                    <div style={{textAlign:'center'}}>
                      <p style={{fontSize:'17px'}}><b>INVOICE AMOUNT</b></p>
                      <p style={{fontSize:'20px',color:'#ff0000'}}>Rs.{total}</p>
                    </div>
                    <hr />
                    <div style={{display:'flex',justifyContent:'center'}}>
                      <div>
                        <p>Invoice No</p>
                        <p>Invoice Date</p>
                        <p>Due Date</p>
                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <p><b>INV-000002</b></p>
                        <p><b>{invoiceDate}</b></p>
                        <p><b>{dueDate}</b></p>
                      </div>
                    </div>
                    <br />
                    <div style={{textAlign:'center'}}>
                      <button style={{padding:'10px 40px', background:'#33cc33', color:'#ffffff', fontSize:'15px'}}>PAY NOW</button>
                    </div>
                    <br />
                  </div>
                </div>
                <br />
                <div>
                  <p><b>Regards,</b><br/>
                  codingmart</p>
                </div>
              </div>
            </div>
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

export default InvoiceView;
   