import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar, 
    Button,
    Link,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import AddIcon from "@mui/icons-material/Add";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import React, {useContext,useState,useEffect} from "react";
import { useRouter } from "next/router";


import Users from "./context"

//  import { signin, authenticate, isAutheticated } from "../services/Auth";

  // import * as React from "react";
// import Estimate from "../../server/models/Estimate";

import {getSingleEsti} from "../services/Customers"
import { SettingsBluetoothSharp } from "@mui/icons-material";
  
  const drawerWidth = 240;
  
  export default function Estimateitems({ estimatesitems }) {

    const router = useRouter();
    const {users, setUsers } = useContext(Users);

    // const { user } = isAutheticated();
 
  //  const [datas, setdatas] = useState();

  //  function clicked() {
   
    

  //  }
    return (
      <div>
        <div className="navba">
          {/* <button
            className="btn btn-primary newicon"
            data-ember-action=""
            data-ember-action-2061="2061"
            style={{background:'green'}}
          >
            {" "}
            
            <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
            <Link href="/addSales">
              <a style={{textDecoration:'none',color:'white'}}>New </a>
            </Link>{" "}
          </button> */}
          <Button
        variant="contained"
        color="success"
        component={Link}
        href="/addestimate"
        
      >
        &#xFF0B;&nbsp;New
      </Button>
          {/* <SettingsOutlinedIcon style={{ marginLeft: "20px" }} />
          <DehazeIcon
            sx={{
              border: "1px solid #D3D3D3",
              borderRadius: "3px",
              padding: "3px",
              background: "#DCDCDC",
              marginLeft: "15px",
            }}
          />
          <a
            href="#"
            data-ember-action=""
            data-ember-action-2133="2133"
            className="blubs"
          >
            <EmojiObjectsTwoToneIcon
              color="primary"
              style={{ marginLeft: "15px" }}
            />
            
          </a> */}
         
        </div>
        <hr/>
        <Box
          component="main"
          lg={{
            flexGrow: 10,
            p: 3,
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>DATE</TableCell>
                   <TableCell>ESTIMATE NUMBER</TableCell>
                  <TableCell>REFERENCE NUMBER</TableCell>
                  <TableCell>CUSTOMER NAME</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>AMOUNT</TableCell>
                  <TableCell>Mail</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {estimatesitems && estimatesitems.map((estimatesitem) => (
                  <TableRow key={estimatesitem._id}>
                    <TableCell>{estimatesitem.estimate_date}</TableCell>
                     <TableCell>{estimatesitem._id}</TableCell> 
                    <TableCell>{estimatesitem.reference}</TableCell>
                    <TableCell>{estimatesitem.customer_name}</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>{estimatesitem.total}</TableCell>
                    
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
                  onClick={()=>{
                    // clicked(estimatesitem._id)
                    // ()=>console.log(estimatesitem._id),
                  router.push(`/estiview/${estimatesitem._id}`)
                    //   router.push('/estiview')
                   } }
                >
                  view
                </Button>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    );
  }