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


import User from "./context"


const drawerWidth = 240;

export default function Salesitems({ salesitems }) {

  const router = useRouter();
    const { setUser } = useContext(User);

    // const { user } = isAutheticated();
 
  //  const [datas, setdatas] = useState([]);

   function clicked() {
   
    router.push('/salesview');

   }



  return (
    <div>
      <div className="navba">
        {/* <button
          className="btn btn-primary newicon"
          data-ember-action=""
          data-ember-action-2061="2061"
          style={{background:'green',marginLeft: "8px"}}
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
        href="/addsale"
      >
        &#xFF0B;&nbsp;New
      </Button>
        {/* <SettingsOutlinedIcon style={{ marginLeft: "28px" }} />
        <DehazeIcon
          sx={{
            border: "1px solid #D3D3D3",
            borderRadius: "3px",
            padding: "3px",
            background: "#DCDCDC",
            marginLeft: "25px",
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
            style={{ marginLeft: "25px" }}
          />{" "}
          {" "}
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
                <TableCell>SALES ORDER#</TableCell>
                <TableCell>REFERENCE#</TableCell>
                <TableCell>CUSTOMER NAME</TableCell>
                <TableCell>Customer Id</TableCell>
               
                <TableCell>AMOUNT</TableCell>
                <TableCell>EXPECTED SHIPMENT DATE</TableCell>
                <TableCell>ORDER STATUS</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesitems && salesitems.map((salesitem) => (
                <TableRow key={salesitem._id}>
                  <TableCell>{salesitem.estimate_date}</TableCell>
                  <TableCell>{salesitem._id}</TableCell>
                  <TableCell>{salesitem.reference}</TableCell>
                  <TableCell>{salesitem.customer_name}</TableCell>
                  <TableCell>{salesitem.c}</TableCell>
                 
                  <TableCell>{salesitem.total}</TableCell>
                  <TableCell>{salesitem.expiry_date}</TableCell>
                  <TableCell>Good</TableCell>
                  <TableCell>
                  
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
                  onClick={ ()=>{
                    // clicked(estimatesitem._id)
                    // ()=>console.log(estimatesitem._id),
                    // setUser(salesitem._id),
                    // console.log(salesitem._id),clicked

                    router.push(`/salesview/${salesitem._id}`)}

                    //   router.push('/estiview')
                        }
                  >
                    view
                  </Button>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}