import React,{useContext,useState} from 'react'; 
import User from './context'
import { getItemId } from "../services/Customers";
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

function ItemView({itemid}) {

    

    
    const { setUser, user } = useContext(User);
    const [name , setName ] = useState("");
    const [unit , setUnit ] = useState("");
    const [type , setType ] = useState("");
    const [purchasePrice , setPurchasePrice ] = useState("");
    const [purchaseDescription , setPurchaseDescription ] = useState("");
    const [sellingPrice , setSellingPrice ] = useState("");
    const [sellingDescription , setSellingDescription ] = useState("");
    // const [name , setname ] = useState("");
    // const [lname , setLname ] = useState("");

    // const [cname , setCname ] = useState("");
    // const [cmail , setCmail ] = useState("");
    // const [cphone , setCphone ] = useState("");
    // const [cmobile , setCmobile ] = useState("");
    // const [cwebsite , setWebsite ] = useState("");
    // const [pan , setPan ] = useState("");
    // const [cur , setCur ] = useState("");
    // const [add , setAdd ] = useState("");
    // const [pay,setPay] = useState("");

console.log(itemid)
getItemId(itemid).then(data=>{
        if(data){
         console.log("success")
          setName(data.name)
          setUnit(data.unit)
          setType(data.type)
          setPurchasePrice(data.purchase_price)
          setPurchaseDescription(data.purchase_description)
          setSellingPrice(data.selling_price)
          setSellingDescription(data.selling_description)
          //  setLname(data.last_name)
          //  setCname(data.company_name)
          //  setCmail(data.customer_email)
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
         
           email:email,
           body:body
            }
            console.log(content.email)
            postMail(content).then(data=>{
              if(data.error){
                setValues({...values,error:data.error})
                
               alert("check ur email")
      
              }
              else{
                  alert("Successfully Sent mail")
                setValues({...values,
                   email:"",
                   body:""
                  })
                 console.log("error")
                 
              }
              console.log(values)
          })

        }


        const Item = styled(Paper)(({ theme }) => ({
          ...theme.typography.body2,
          padding: theme.spacing(1),
          // textAlign: 'center',
          borderRadius:'0px',
          color: theme.palette.text.secondary,
        }));

        // const [openAddress, setOpenAddress] = React.useState(false);
        // const [openOtherDetails, setOpenOtherDetails] = React.useState(false);
        // const [openContactPerson, setOpenContactPerson] = React.useState(false);
        // const handleClickAddress = () => {
        //   setOpenAddress(!openAddress);
        // };
        // const handleClickOtherDetails = () => {
        //   setOpenOtherDetails(!openOtherDetails);
        // };
        // const handleClickContactPerson = () => {
        //   setOpenContactPerson(!openContactPerson);
        // };

    return (
        <>
    
        <div style={{marginLeft:'280px', marginTop:'80px'}}>
        <h2>{name}</h2>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChanges} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            {/* <Tab label="Transactions" value="2" />
            <Tab label="History" value="3" /> */}
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
            
            <Item>
                    <List>
                      <div style={{padding:'15px 50px'}}>
                        <div style={{display:'flex'}}>
                          <div>
                            <p style={{color:'#999999'}}>Item Type</p>
                            <p style={{color:'#999999'}}>Unit</p>
                            <p style={{color:'#999999'}}>Created Source</p>
                          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div>
                            <p>{type}</p>
                            <p>{unit}</p>
                            <p>User</p>
                          </div>
                        </div>
                        <br />
                        <div>
                          <Typography variant="body2" gutterBottom>
                            <b>Purchase Information</b>
                          </Typography>
                          <div style={{display:'flex'}}>
                            <div>
                              <p style={{color:'#999999'}}>Cost Price</p>
                              <p style={{color:'#999999'}}>Purchase Account</p>
                              <p style={{color:'#999999'}}>Description</p>
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                              <p>Rs.{purchasePrice}.00</p>
                              <p>Materials</p>
                              <p>{purchaseDescription}</p>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div>
                          <Typography variant="body2" gutterBottom>
                            <b>Sales Information</b>
                          </Typography>
                          <div style={{display:'flex'}}>
                            <div>
                              <p style={{color:'#999999'}}>Selling Price</p>
                              <p style={{color:'#999999'}}>Sales Account</p>
                              <p style={{color:'#999999'}}>Description</p>
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                              <p>Rs.{sellingPrice}.00</p>
                              <p>Discount</p>
                              <p>{sellingDescription}</p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </List>
                  </Item>
          </Grid>
        </Box>

        {/* </div> */}
        </TabPanel>
        {/* <TabPanel value="2">
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
                        value={values.email} onChange={handleChange("email")}/>
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
            <label for="exampleFormControlTextarea1">New Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"  onChange={handleChange("body")}
                        value={values.body} required>
          hello
            </textarea>
          </div>
          
          <div style={{padding:"10px" ,textAlign:"center"}} >
          <button type="submit" class="btn btn-primary btn-lg">Send</button>

          </div>
          
        </form>
        </TabPanel> */}
      </TabContext>
    </Box>
    </div>
         </>
    )
}

export default ItemView;
   