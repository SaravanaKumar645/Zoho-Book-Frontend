
// import classes from "./ExpenseMain.module.css";
import React, {useContext,useState,useEffect} from "react";
// import NewTrips from "./Trips";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MaterialTable from "material-table";
// import PatchedPagination from "PatchedPagination";
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";

import { Button } from "@mui/material";
import { getPayRec } from "../services/Customers";
 import User from "./context"

 import { signin, authenticate, isAutheticated } from "../services/Auth";


// import {
//   faEllipsisH,
//   faQuestion,
//   faSearch,
// } from "@fortawesome/free-solid-svg-icons";

// import { getExpense, deleteTrip } from "../auth/Trips";
 

export default function Customers() {

  const router = useRouter();

  const { setUser } = useContext(User);

   const { user } = isAutheticated();

  const [datas, setdatas] = useState([]);
  const [ids, setIds] = useState(0);

  useEffect(() => {
    getPayRec(user._id)
      .then((data) => {
        console.log(data);
        setdatas(data);
      })

      .catch(console.log("Get Trpis request failed"));
  }, []);



  // console.log(user.email);
  // useEffect(() => {
  //   getExpense(user.email)
  //     .then((data) => {
  //       console.log(data);
  //       setdatas(data);
  //     })

  //     .catch(console.log("Get Expense request failed"));
  // }, []);

  const Columns = [
    { title: "Payment Id", field: "_id" },
    { title: "NAME", field: "customer_name" },
    { title: "Payment Id", field: "_id" },
    { title: "Reference", field: "reference" },
    
    ];


    return (
      <>
      {/*<div>
       <div style={{display:"flex"}}>
        {" "}
        <h2> All Received Payments</h2>
        <div>
          {" "}
          <button
            type="button"
            
            style={{ padding: "10px 15px" }}
          >
            <Link href="/addcustomer">
              <a>+ New </a>
            </Link>
          </button>
          &nbsp;
           <button style={{ padding: "10px 10px" }}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          &nbsp;
          <button style={{ padding: "10px 10px" }}>
            <FontAwesomeIcon icon={faQuestion} />
          </button> 
          <button style={{ padding: "10px 10px" }}>
            <SettingsIcon />
          </button>
          <button style={{ padding: "10px 10px" }}>
            <MenuIcon />
          </button>
        </div>
      </div> */}
        <div  style={{ marginTop:"60px",    width: "100%"}}>
          <br/>
        <button
            type="button"
            
            style={{ padding: "8px 12px", marginLeft:"1000px", borderRadius:"4px",textDecoration:"none",listStyle:"none",borderStyle:"none" , borderWidth:"1px", background:"#40bf40"}}
          >
            <Link href="/addbill">
              <a style={{textDecoration:"none", color:"#ffffff"}}>+ New</a>
            </Link>
          </button>
          <br/>
          <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        >

        </link>
        <MaterialTable
          title={"Active Customers"}
          columns={Columns.map((e) => e)}
          data={
            datas &&
            datas.map((e) => {
              return {
                ...e,
                // DateTime: e.DateTime
                //   ? moment(e.DateTime, "YYYY-MM-DD").format("DD MMM YYYY")
                //   : null,
              };
            })
          }
          // components={{
          //   // Pagination: PatchedPagination,
          // }}
          options={{
            actionsColumnIndex: -1,
            exportAllData: true,
            exportButton: true,
            columnResizable: true,
            filtering: false,
            sorting: true,
            paging: true,
            pageSize: 10,
            emptyRowsWhenPaging: false,
            pageSizeOptions: [5, 10, 20, 30],
  
            headerStyle: {
              backgroundColor: "#a6a6a6",
              color: "black",
              fontSize: "15px",
              padding: "8px 5px",
              fontFamily: "Poppins, sans-serif",
            },
            cellStyle: {
              textAlign: "left",
              fontSize: "12px",
              padding: "15px 5px",
              fontFamily: "Poppins, sans-serif",
            },
          }}
          actions={[
            (rowData) => ({
              icon: () => (
                <Button
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    width: 60,
                    borderRadius: 20,
                    padding: 3,
                    color:'#000000',
                    backgroundColor:'#c2c2a3'
                  }}
                >
                  view
                </Button>
              ),
              tooltip: "Notes",
              onClick: (e, data) => {
                router.push(`/paymentres/${data._id}`)
  

                
              },
            }),
            (rowData) => ({
              icon: () => (
                <Button
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  width: 60,
                  borderRadius: 20,
                  padding: 3,
                  border: '1px',
                  color:'#000000',
                  backgroundColor:"#ff5c33"
                }}>
                  Delete
                </Button>
              ),
              tooltip: "Notes",
              onClick: (e, data) => {

              deleteCus(data._id)

              router.push('/customer')
                
              },
            })
  
          
          ]}
  
  
          />

 
        </div>


          </>
        
    
      
    )
}