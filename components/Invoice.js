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

export default function Invoice({ invoices }) {
  const router = useRouter();
  const { setUser } = useContext(User)

  function clicked() {
   
    router.push('/invoiceview');

   }
  return (
    <div>
      <div className="navba">
        {/* <button
          className="btn btn-primary newicon"
          data-ember-action=""
          data-ember-action-2061="2061"
          style={{ background: "green", marginLeft: "8px" }}
        >
          {" "}
          <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
          <Link href="/addSales">
            <a style={{ textDecoration: "none", color: "white" }}>New </a>
          </Link>{" "}
        </button> */}
        <Button
        variant="contained"
        color="success"
        component={Link}
        href="/addinvoice"
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
        </a> */}
      </div>

      <hr />
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
                <TableCell>Date</TableCell>
                <TableCell>Invoice Number</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>View</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {invoices &&
                invoices.map((invoice) => (
                  <TableRow key={invoice._id}>
                    <TableCell>{invoice.invoice_date}</TableCell>
                    <TableCell>{invoice._id}</TableCell>
                    <TableCell>{invoice.customer_name}</TableCell>
                    <TableCell>{invoice.total}</TableCell>
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
                        onClick={
                          // setUser(invoice._id),
                          // console.log(invoice._id),clicked
                          //   router.push('/estiview')
    
                          ()=>{
                            router.push(`/invoice/${invoice._id}`)
    
                          }
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
