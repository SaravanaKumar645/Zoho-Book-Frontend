import React,{useContext,useState} from 'react'; 
import User from './context'
import { getventorByUser,postMail } from "../services/Customers";
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
// import "bootstrap/dist/css/bootstrap.min.css";

function Users({venid}) {

    

    
    // const { setUser, user } = useContext(User);
    const [fname , setFname ] = useState("");
    const [lname , setLname ] = useState("");

    const [cname , setCname ] = useState("");
    const [vmail , setVmail ] = useState("");
    const [ventorId , setVentorId ] = useState("");
    const [cphone , setCphone ] = useState("");
    const [cmobile , setCmobile ] = useState("");
    const [cwebsite , setWebsite ] = useState("");
    const [pan , setPan ] = useState("");
    const [cur , setCur ] = useState("");
    const [add , setAdd ] = useState("");
    const [pay,setPay] = useState("");


    getventorByUser(venid).then(data=>{
        if(data){
         
           setFname(data.first_name)
           setLname(data.last_name)
           setCname(data.company_name)
           setVmail(data.vendor_email)
           setVentorId(data.user_id)
           setCphone(data.work_phone)
           setCmobile(data.mobile)
           setWebsite(data.website)
           setPan(data.pan)
           setCur(data.curbalance)
           setAdd(data.addre)
           setPay(data.paymentT)
           console.log(data)
        }
    })
   
    const [value, setValue] = React.useState('1');


    const [values, setValues] = useState({
        email:"",
        body:"",  
      });

      const {email,body}=values
      // console.log(values)

    const handleChanges = (event, newValue) => {
      setValue(newValue);
    };
   
    
    const handleChange = name => event => {
      setValues({ ...values,[name]:event.target.value});
    };
    const handleSubmits = (e) => {
        e.preventDefault();
        const content={
         
           email:vmail,
           subject:"Vendor Resistration Sussessfully Done!",
           body:body,
           

            }
            console.log(content.email)
            postMail(content,vmail).then(data=>{
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
              console.log(content)
          })

        }


    // const handleSubmits = (e) => {
    //   e.preventDefault();
    //   var today = new Date();
    //   const content={
        
    //     // email:"kgokulakannan49@gmail.com",
    //     sub:"vendor Registered Confirmation - Reg",
    //     customername:fname,
    //     estimateDate : today,
    //     sreference:sreference,
    //     itemName:itemName,
    //     quantity:quantity,
    //     amount:amount
    //       }

    //       const user = {
    //         content:content
    //       }
    //       console.log(user)
    //       postSaleEmail(user,emails).then(data=>{

    //         console.log(data)
            
    //     }).catch((err)=>console.log(err))

    //   }


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
        <h2>{fname} {lname}</h2>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChanges} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Comments" value="2" />
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
            <Grid item xs={4}>
              <Item>
                <Typography variant="body2" gutterBottom>
                {cname}
                </Typography>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={vmail} />
                </ListItem>
                <List>
                  <ListItemButton onClick={handleClickAddress}>
                    <Typography variant="body2" gutterBottom>
                      ADDRESS
                    </Typography>
                    {openAddress ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openAddress}>
                    <List>
                      <Typography variant="body2" gutterBottom>
                        <b>Billing Address</b>
                        <p>{add}</p>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <b>Shipping Address</b>
                        <p>{add}</p>
                      </Typography>
                    </List>
                  </Collapse>
                  <br />
                  <ListItemButton onClick={handleClickOtherDetails}>
                    <Typography variant="body2" gutterBottom>
                      OTHER DETAILS
                    </Typography>
                    {openOtherDetails ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openOtherDetails}>
                    <List>
                    {/* <Grid container spacing={0}>
                      <Grid xs={6}>
                        <Item>
                          <Typography variant="body2" gutterBottom>
                            <b>Billing Address</b>
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid xs={6}>
                        <Item>
                          <Typography variant="body2" gutterBottom>
                            <b>Billing Address</b>
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid> */}
                      <div style={{display:'flex'}}>
                        <div>
                          <p style={{color:'#999999'}}>Vendor ID</p>
                          <p style={{color:'#999999'}}>Currency Code</p>
                          <p style={{color:'#999999'}}>Payment Terms</p>
                          <p style={{color:'#999999'}}>Portal Language</p>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                          {/* <p>{user}</p> */}
                          <p>{ventorId}</p>
                          <p>INR</p>
                          <p>Cash</p>
                          <p>English</p>
                        </div>
                      </div>
                    </List>
                  </Collapse>
                  <br />
                  <ListItemButton onClick={handleClickContactPerson}>
                    <Typography variant="body2" gutterBottom>
                      CONTACT PERSONS
                    </Typography>
                    {openContactPerson ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openContactPerson}>
                    <List>
                      <Typography variant="body2" gutterBottom>
                        <p style={{textAlign:'center'}}>No contact person found.</p>
                      </Typography>
                    </List>
                  </Collapse>
                  <br />
                </List>
                <Grid xs={10}>
                  <Item style={{backgroundColor:'#e6ffe6', borderRadius:'0px', borderWidth:'1px', borderColor:'#66ff66', padding:'20px 30px 30px 30px'}}>
                    <ListItemIcon>
                      <RecentActorsOutlinedIcon style={{color:'#33cc33'}}/>
                    </ListItemIcon>
                    <Typography variant="body2" gutterBottom>
                      <p>Client Portal allows your customers to keep track of all the transactions between them and your business. Learn More</p>
                    </Typography>
                  </Item>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <div style={{display:'flex'}}>
                  <div style={{padding:'5px 20px 20px 30px'}}>
                  <Typography variant="body2" gutterBottom>
                      <p style={{fontSize:'25px'}}><b>Outstanding Receivables</b></p>
                      <p style={{fontSize:'20px',color:'#e65c00'}}><b>Rs.00.00</b></p>
                      <p style={{color:'#3399ff'}}>View Opening Balance</p>
                    </Typography>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                  <div style={{display:'flex'}}>
                    <div>
                      <p style={{color:'#999999'}}>Unused Credits</p>
                      <p style={{color:'#999999'}}>Payment due period</p>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                      <p><b>Rs.00.00</b></p>
                      <p><b>Due on Receipt</b></p>
                    </div>
                  </div>
                  </div>
                </div>
              </Item>
              <Divider />
            </Grid>
          </Grid>
        </Box>

        {/* </div> */}
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
                        value={vmail} onChange={handleChange("email")}/>
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
        </TabPanel>
      </TabContext>
    </Box>
    </div>
         </>
    )
}

export default Users;
   