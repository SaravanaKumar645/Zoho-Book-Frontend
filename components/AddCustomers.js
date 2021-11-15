import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import Items from "../services/Customers"
import React,{useState} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext, { useTabContext } from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { addCustomer } from "../services/Customers"
import { useRouter } from "next/router";
import {isAutheticated} from '../services/Auth'

export default function Estimates() {

  const {user} = isAutheticated();
 
  const [value, setValue] = useState('1');

  const router = useRouter();
const [values, setValues] = useState({
  customer_type:"",
  first_name:"",
  last_name:"",
  company_name:"",
  customer_email:"",
  work_phone:"",
  mobile:"",
  website:"",
  pan:"",
  curbalance:"",
  paymentT:"",
  language:"",
  facebook:"",
  twitter:"",
  attention:"",
  country:"",
  addre:"",
  city:"",
  state:"",
  code:"",
  phone:"",
  fax:"",
  textarea:""


});

const {customer_type,first_name,last_name,company_name,customer_email,work_phone,mobile,website,pan,curbalance,paymentT,language,facebook,twitter,attention,country,addre,city,state,code,phone,fax,textarea}=values
console.log(values)

const handleChange = name => event => {
  setValues({ ...values,[name]:event.target.value});
};
const handleChanges = (event, newValue) => {
  setValue(newValue);
};

const handleSubmit = (e) => {
    e.preventDefault();
    // setValues({...values,isclick:true})
    const customer={
      user_id: user._id,
      customer_type:customer_type,
      first_name:first_name,
      last_name:last_name,
      company_name:company_name,
      customer_email:customer_email,
      work_phone:work_phone,
      mobile:mobile,
      website:website,
      pan:pan,
      curbalance:curbalance,
      paymentT:paymentT,
      language:language,
      facebook:facebook,
      twitter:twitter,
      attention:attention,
      country:country,
      addre:addre,
      city:city,
      state:state,
      code:code,
      phone:phone,
      fax:fax,
      textarea:textarea
    
        }
        addCustomer(customer).then(data=>{
          if(data.error){
            setValues({...values,error:data.error})
            
       
  
          }
          else{
            setValues({...values,
                customer_type:"",
                first_name:"",
                last_name:"",
                company_name:"",
                customer_email:"",
                work_phone:"",
                mobile:"",
                website:"",
                pan:"",
                curbalance:"",
                paymentT:"",
                language:"",
                facebook:"",
                twitter:"",
                attention:"",
                country:"",
                addre:"",
                city:"",
                state:"",
                code:"",
                phone:"",
                fax:"",
                textarea:""
  
              })
             console.log("error")
             router.push('/customer')
          }
          console.log(values)
      })

        // console.log(customer)

       }


 
  // const customHandleClick = async (e) => {
  //   e.preventDefault();
  //   // const data = new FormData(event.currentTarget);
  //   let data = {
  //     primary: e.target.elements.primary.value,
  //     first_name: e.target.elements.first_name.value,
  //     customer_type: e.target.elements.customer_type.value,
  //     last_name: e.target.elements.last_name.value,
  //     customer_email: e.target.elements.customer_email.value,
  //     work_phone: e.target.elements.work_phone.value,
  //     website: e.target.elements.website.value,
  //     mobile: e.target.elements.mobile.value,
  //   };
  //   console.log(data);
  //   // let res = await Items.addCustomers(data);
  //   // console.log(res);
  // };



//reference from zoho expense 


// const [values, setValues] = useState({
//   email:"",
//   org_name:"",
//   travel_type:"",
//   trip_name:"",
//   business_purpose:"",
//   f_Departure_From:"",
//   f_Arrive_At:"",
//   f_Departure_date:"",
//   f_Description:"",
//   h_location:"",
//   h_check_in:"",
//   h_check_out:"",
//   h_description:"",
//   error:false,
//   sucess:"",
//   didRedirect:false,
//   isclick:""
  
// });




  // const handleChanges = (e) => {
  //   setName(e.target.value);
  // };
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div>
      <div style={{ float: "right", marginLeft: "10px" }}>
        <div className="navba">
          <a
            href="#"
            data-ember-action=""
            data-ember-action-2133="2133"
            className="blubs"
          >
            <EmojiObjectsTwoToneIcon
              color="primary"
              style={{ marginLeft: "110px" }}
            />{" "}
            Page Tips{" "}
          </a>
        </div>
        <hr />

        <div className="row zb-txn-form">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} style={{width:"119%"}}>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-lg-3 pt-0">
                    <span
                      id="ember548"
                      className="tooltip-container text-dashed-underline ember-view"
                    >
                      {" "}
                      Customer Type{" "}
                    </span>
                  </legend>
                  <div className="col-lg-9">
                    <div className="form-check form-check-inline">
                      <input
                        id="a1e525b29"
                        className="ember-view form-check-input"
                        onChange={handleChange("customer_type")} value="business" type="radio"  name="customer_type"  
                        
                      />
                      <label className="form-check-label" htmlFor="a1e525b29">
                        Business
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        
                        id="a0ee5a8ca"
                        className="ember-view form-check-input"
                        onChange={handleChange("customer_type")} value="inidividual" type="radio"  name="customer_type" 
                       />
                      <label className="form-check-label" htmlFor="a0ee5a8ca">
                        Individual
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  <span
                    id="ember551"
                    className="tooltip-container text-dashed-underline ember-view"
                  >
                    {" "}
                    Primary Contact{" "}
                  </span>
                </label>
                <div className="inline-fields col-lg-8">
                  <div className="row">
                    <div className="col-lg-4">
                      <div id="ember552" className="type-ahead ember-view">
                        <div
                          id="ember553"
                          className="dropdown show ac-dropdown ember-view"
                        >
                          <div
                            className="auto-select ac-selected"
                            tabIndex="-1"
                          >
                            <div>
                              {/* <select className="value" name="unit"  > */}
                              {/* <select className="value" name="unit" >  */}
                              {/* <input autocomplete="off" spellcheck="false" placeholder="Salutation" autocorrect="off" autocapitalize="off" id="ember554" className="ember-text-field form-control ac-search-txt ember-view" type="text">  */}
                              <select
                                className="box"
                                name="primary"
                                required
                                style={{
                                  padding: "5px 49px 0px 20px",
                                  marginLeft: "-12px",
                                  marginTop: "-20px",
                                }}
                              >
                                {/* <input placeholder="Salutation" type="text" /> */}
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Miss.">Miss.</option>
                                <option value="Dr.">Dr.</option>
                              </select>
                            </div>
                            {/* </select>   */}
                            {/* <div
                                className="ember-text-field form-control ac-search-txt ember-view"
                                
                              > 
                                 <select className="value" name="unit" >
                                 
                                </select> 
                              </div>  */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <input
                        placeholder="First Name"
                   
                        autoFocus=""

                        onChange={handleChange("first_name")}
                        value={values.first_name} required

                        id="ember555"
                        className="ember-text-field ember-view form-control"
                        type="text"
                      />
                    </div>
                    <div className="col-lg-4">
                      <input
                        placeholder="Last Name"
                        id="ember556"

                        onChange={handleChange("last_name")}
                        value={values.last_name} required

                        className="ember-text-field ember-view form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  Company Name{" "} 
                  {/* company_name */}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"
                    onChange={handleChange("company_name")}
                    value={values.company_name} required
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="row form-group ">
                <label className="required col-form-label col-lg-3">
                  Customer Display
                  <br /> Name
                </label>

                <div className="col-lg-6">
                  <div id="ember558" className="type-ahead ember-view">
                    <div
                      id="ember559"
                      className="dropdown show ac-dropdown ember-view"
                    >
                      <div className="auto-select ac-selected" tabIndex="-1">
                        <input
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                          <HelpOutlineOutlinedIcon
                            color="disabled"
                            style={{ marginLeft: "20px" }}
                          />
                        

                        {/* <input autocomplete="off" spellcheck="false" placeholder="" autocorrect="off" autocapitalize="off" id="ember560" className="ember-text-field form-control ac-search-txt ember-view" type="text"
     />  */}
                      </div>
                    </div>
                  </div>
                </div>
                <span id="ember561" className="popover-container ember-view">
                  <div
                    id="ember563"
                    className="d-none popover bs-popover-right ember-view display-name-help"
                  ></div>
                </span>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3 ">
                  Customer Email
                </label>
                <div
                  className="col-lg-6"
                  style={{ display: "flex", width: "55%" }}
                >
                  <input
                    id="ember564"

                    onChange={handleChange("customer_email")}
                    value={values.customer_email} required

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                  <InfoOutlinedIcon
                    color="disabled"
                    style={{ marginLeft: "20px" }}
                  />
                </div>
                <span id="ember565" className="popover-container ember-view">
                  <div
                    id="ember567"
                    className="d-none popover bs-popover-right ember-view display-name-help"
                  ></div>
                </span>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  Customer Phone
                </label>
                <div className="col-lg-3" style={{ paddingRight: "8px" }}>
                  <input
                    placeholder="Work Phone"

                    onChange={handleChange("work_phone")}
                    value={values.work_phone} required

                    id="ember568"
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
                <div
                  className="col-lg-3"
                  style={{ paddingRight: "8px", display: "flex", width: "30%" }}
                >
                  <input
                    placeholder="Mobile"



                    onChange={handleChange("mobile")}
                    value={values.mobile} required         
                    
                    id="ember569"
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                  <InfoOutlinedIcon
                    color="disabled"
                    style={{ marginLeft: "20px" }}
                  />
                </div>
                <span id="ember570" className="popover-container ember-view">
                  <div
                    id="ember572"
                    className="d-none popover bs-popover-right ember-view display-name-help"
                  ></div>
                </span>
                <div className="form-control-plaintext col-lg-3 font-xs">
                  <a
                    href="#"
                    data-ember-action=""
                    data-ember-action-573="573"
                    style={{ textDecoration: "none", marginLeft: "12px" }}
                  >
                    Add more details
                  </a>
                </div>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">Website</label>
                <div className="col-lg-6">
                  <input
                    id="ember574"

                    onChange={handleChange("website")}
                    value={values.website} 

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>
              <Box sx={{ width: '100%', typography: 'body1' }}>
     
      <TabContext value={value} sx={{ width: '100%', typography: 'body1' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <TabList onChange={handleChanges} aria-label="lab API tabs example">
            <Tab label="Other Details" value="1" />
            <Tab label="Address" value="2" />
            <Tab label="Contact Persons" value="3" />
            <Tab label="Custom Fields" value="4" />
            <Tab label="Reporting" setValues="5" />
            <Tab label="Remarks" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
       
        <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  PAN{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557" onChange={handleChange("pan")}
                    value={values.pan}
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>

              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  Corrency*{" "}
                </label>
       <div className="col-lg-4">
                      <div id="ember552" className="type-ahead ember-view">
                        <div
                          id="ember553"
                          className="dropdown show ac-dropdown ember-view"
                        >
                          <div
                            className="auto-select ac-selected"
                            tabIndex="-1"
                          >
                            <div>
                              {/* <select className="value" name="unit"  > */}
                              {/* <select className="value" name="unit" >  */}
                              {/* <input autocomplete="off" spellcheck="false" placeholder="Salutation" autocorrect="off" autocapitalize="off" id="ember554" className="ember-text-field form-control ac-search-txt ember-view" type="text">  */}
                              <select
                                className="box"
                                name="primary"
                                required
                                style={{
                                  padding: "5px 49px 0px 20px",
                                  marginLeft: "-12px",
                                  marginTop: "-20px",
                                }}
                              >
                                {/* <input placeholder="Salutation" type="text" /> */}
                                <option value="indian">Indian Rupies</option>
                                <option value="american.">American Coin</option>
                               
                              </select>
                            </div>
                            {/* </select>   */}
                            {/* <div
                                className="ember-text-field form-control ac-search-txt ember-view"
                                
                              > 
                                 <select className="value" name="unit" >
                                 
                                </select> 
                              </div>  */}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>


        <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  Opening Balance{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"  onChange={handleChange("curbalance")}
                    value={values.curbalance} required

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>


        <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  Payment Terms{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557" onChange={handleChange("paymentT")}
                    value={values.paymentT} 
                    required
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  Portal Language{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557" 
                    onChange={handleChange("language")}
                    value={values.language}

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  Payment Terms{" "}
                </label>
       <div className="col-lg-4">
                      <div id="ember552" className="type-ahead ember-view">
                        <div
                          id="ember553"
                          className="dropdown show ac-dropdown ember-view"
                        >
                          <div
                            className="auto-select ac-selected"
                            tabIndex="-1"
                          >
                            <div>
                              {/* <select className="value" name="unit"  > */}
                              {/* <select className="value" name="unit" >  */}
                              {/* <input autocomplete="off" spellcheck="false" placeholder="Salutation" autocorrect="off" autocapitalize="off" id="ember554" className="ember-text-field form-control ac-search-txt ember-view" type="text">  */}
                              <select
                                className="box"
                                name="primary"
                                required
                                style={{
                                  padding: "5px 49px 0px 20px",
                                  marginLeft: "-12px",
                                  marginTop: "-20px",
                                }}
                              >
                                {/* <input placeholder="Salutation" type="text" /> */}
                                <option value="indian">Due end of the Month</option>
                                <option value="american.">Due end of the Year</option>
                               
                              </select>
                            </div>
                            {/* </select>   */}
                            {/* <div
                                className="ember-text-field form-control ac-search-txt ember-view"
                                
                              > 
                                 <select className="value" name="unit" >
                                 
                                </select> 
                              </div>  */}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  Facebook{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"

                    onChange={handleChange("facebook")}
                    val={values.facebook}


                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  Twitter{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"

                    onChange={handleChange("twitter")}
                    value={values.twitter}

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>
{/* 
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {""}
                  City {""}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557" 
                    onChange={handleChange("city")}
                    value={values.city}

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div> */}

        </TabPanel>
        <TabPanel value="2">
         <h4>Address</h4>
        <div className="row form-group">
                <label className="col-form-label col-lg-3">
                {" "}
                  Attention {" "}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"  onChange={handleChange("attention")}
                    value={values.attention}

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>

              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {""}
                  Country/Region {""}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557" 
                    onChange={handleChange("country")}
                    value={values.country}

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>

              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {""}
                  Address {""}
                </label>
                <div className="col-lg-6">
                  {/* <input
                    id="ember557" value={name} onChange={handleChanges}
                    className="ember-text-field ember-view form-control"
                    type="text-area"
                  /> */}

<TextareaAutosize
      aria-label="Address"
      minRows={3} onChange={handleChange("addre")}
      value={values.addre}
      placeholder="Enter Address here"
      style={{ width: 500 }}
    />
                </div>
              </div>


              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {""}
                  City {""}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557" 
                    onChange={handleChange("city")}
                    value={values.city}

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>

              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {""}
                  State {""}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"  onChange={handleChange("state")}
                    value={values.state}

                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>


              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {""}
                  Zip Code {""}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557" onChange={handleChange("code")}
                    value={values.code}
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>


              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {""}
                  Phone {""}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557" onChange={handleChange("phone")}
                    value={values.phone}
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>


              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {""}
                  Fax {""}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557" onChange={handleChange("fax")}
                    value={values.fax}
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>

        </TabPanel>
        <TabPanel value="3">Contact Persons
        
        
        
        </TabPanel>
        <TabPanel value="4">Custom Fields</TabPanel>
        <TabPanel value="5">Reporting Tags</TabPanel>
        <TabPanel value="6">
        <TextareaAutosize
      aria-label="minimum height"
      minRows={3}  onChange={handleChange("textarea")}
      value={values.textarea}
      placeholder="Remarks for Internal Use"
      style={{ width: 500 }}
    />

        </TabPanel>
      </TabContext>
    </Box>
              
              <button
                id="ember1447"
                className="btn btn-primary ember-view"
                type="submit">Save</button>
              <Link href="/customer">
                <button
                  id="ember1447"
                  className="btn btn-primary ember-view"
                  type="submit" style={{marginLeft:"10px"}}
                >
               
                    <a >Go back </a>
                  
                  
                </button>
                </Link>
                
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
}