import AddIcon from "@mui/icons-material/Add";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";
import Image from "next/dist/client/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "bootstrap/dist/css/bootstrap.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import Items from "../services/Customers"
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ReactPlayer from "react-player";
import React,{useState} from "react";
import { useRouter } from "next/router";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext, { useTabContext } from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {isAutheticated} from "../services/Auth"
import { addVendor } from "../services/Customers"

export default function AddVendor() {
 
  const {user} = isAutheticated();
 
  const [value, setValue] = useState('1');

  const router = useRouter();
const [values, setValues] = useState({
  customer_type:"",
  first_name:"",
  last_name:"",
  company_name:"",
  vendor_email:"",
  work_phone:"",
  mobile:"",
  website:""


});

const {customer_type,first_name,last_name,company_name,vendor_email,work_phone,mobile,website}=values
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
    const ventor={
      user_id: user._id,
      first_name:first_name,
      last_name:last_name,
      company_name:company_name,
      vendor_email:vendor_email,
      vendor_phone:work_phone,
      mobile_phone:mobile,
      website:website,

    
        }
        addVendor(ventor).then(data=>{
          if(data.error){
            setValues({...values,error:data.error})
            
       
  
          }
          else{
            setValues({...values,
                customer_type:"",
                first_name:"",
                last_name:"",
                company_name:"",
                vendor_email:"",
                work_phone:"",
                mobile:"",
                website:"",
                
  
              })
             console.log("error")
             router.push('/vendor')
          }
          console.log(values)
      })

        // console.log(customer)

       }


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
                      Vendor Type{" "}
                    </span>
                  </legend>
                  <div className="col-lg-9">
                    <div className="form-check form-check-inline">
                      <input
                        id="a1e525b29"
                        className="ember-view form-check-input"
                        onChange={handleChange("vendor_type")} value="business" type="radio"  name="vendor_type"  
                        
                      />
                      <label className="form-check-label" htmlFor="a1e525b29">
                        Business
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        
                        id="a0ee5a8ca"
                        className="ember-view form-check-input"
                        onChange={handleChange("vendor_type")} value="inidividual" type="radio"  name="vendor_type" 
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
                  vendor Display
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
                  Vendor Email
                </label>
                <div
                  className="col-lg-6"
                  style={{ display: "flex", width: "55%" }}
                >
                  <input
                    id="ember564"

                    onChange={handleChange("vendor_email")}
                    value={values.vendor_email} required

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
                  Vendor Phone
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
             
              
              <button
                id="ember1447"
                className="btn btn-primary ember-view"
                type="submit"
              >
                {/* 
            <Link href="/addItem">
              <a onClick={customHandleClick}>Save </a>
            </Link> */}
                Save
              </button>
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