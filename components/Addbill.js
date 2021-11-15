import { textAlign } from "@mui/system";
import classes from "./Addbill.module.css";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
import "bootstrap/dist/css/bootstrap.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Link from "next/link";
import { useState } from "react";
import { postParRec } from "../services/Customers";
import { isAutheticated } from "../services/Auth";

function createData(date, bill, purchaseorder, billamount, amountdue, payment) {
  return { date, bill, purchaseorder, billamount, amountdue, payment };
}

const rows = [createData("0", 0, 0, 0, 0, 0)];

function Addbill(props) {
  const { user } = isAutheticated();
  const [value, setValue] = useState("1");
  const [values, setValues] = useState({
    customer_name: "",
    cemail: "",
    amount_received: "",
    payment_date: "",
    payment_mode: "",
    despoist_to: "",
    reference: "",
  });

  const {
    customer_name,
    cemail,
    amount_received,
    payment_date,
    payment_mode,
    despoist_to,
    reference,
  } = values;
  console.log(values);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, isclick: true });
    const bills = {
      user_id: user._id,
      cemail: cemail,
      customer_name: customer_name,
      amount: amount_received,
      paymentDate: payment_date,
      paymentmode: payment_mode,
      deposited: despoist_to,
      reference: reference,
    };
    console.log(bills);
    postParRec(bills).then((data) => {
      if (data.error) {
        console.log("error");
      } else {
        alert("Saved Succesfully");
      }
    });
  };
  return (
    <>
      <div className={classes.container}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Typography component="div" className={classes.heading}>
              Record Payment
            </Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Box style={{ marginLeft: "180px", marginTop: "150px" }}>
            <div className={classes.content}>
              <div className="row zb-txn-form">
                <div className="col-lg-8">
                  <form onSubmit={handleSubmit}>
                    <div className="row form-group ">
                      {/* <label className="required col-form-label col-lg-3">
                  Customer Name
                </label> */}

                      <div className="row form-group">
                        <label className="col-lg-3 col-form-label required">
                          Customer Name
                        </label>
                        <div className="col-lg-8" style={{ display: "flex" }}>
                          <select
                            id="outlined-select-currency"
                            select
                            name="customer_name"
                            onChange={handleChange("customer_name")}
                            label="Select Customer"
                            style={{ width: 500 }}
                          >
                            <option
                              disabled
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              Select
                            </option>
                            {props.customers &&
                              props.customers.map((option) => (
                                <option
                                  key={option._id}
                                  value={option.name}
                                  onChange={() => {
                                    setIds(option._id);
                                  }}
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  {option.first_name + " " + option.last_name}
                                </option>
                              ))}
                          </select>
                        </div>
                        <br />
                        <br />
                      </div>

                      <div className="row form-group">
                        <label className="col-lg-3 col-form-label ">
                          Customer Email
                        </label>
                        <div className="col-lg-8" style={{ display: "flex" }}>
                          <input
                            id="outlined-basic"
                            label="cemail"
                            name="cemail"
                            onChange={handleChange("cemail")}
                            style={{ width: 500 }}
                          ></input>
                          <div></div>
                        </div>

                        {/* <div className="row form-group">
                    <label className="col-lg-3 col-form-label required">
                      Item Name
                    </label>
                    <div className="col-lg-8" style={{ display: "flex" }}>
                      <select
                        id="outlined-select-currency"
                        select
                        name="customer_name"
                        onChange={handleChange("customer_name")}

                        label="Select Customer"
                        style={{ width: 500 }}
                      >
                        <option
                          disabled
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          Select
                        </option>
                        {props.customers && props.customers.map((option) => (
                          <option
                            key={option._id}
                            value={option.name}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {option.first_name + " " + option.last_name}
                          </option>
                        ))}
                      </select>
                      </div>

                      </div> */}

                        <div>
                          {/* <SearchIcon
                          style={{
                            width: "50px",
                            padding: "8px",
                            height: "40px",
                            margin: "10px",
                            borderRadius: "5px",
                            backgroundColor: "#397db9",
                          }}
                        /> */}
                        </div>
                      </div>

                      <span
                        id="ember561"
                        className="popover-container ember-view"
                      >
                        <div
                          id="ember563"
                          className="d-none popover bs-popover-right ember-view display-name-help"
                        ></div>
                      </span>
                    </div>
                    <br />

                    <div className="row form-group">
                      <label className="required col-form-label col-lg-3">
                        Amount Received
                      </label>
                      <div className="col-lg-6">
                        <input
                          id="ember557"
                          className="ember-text-field ember-view form-control"
                          placeholder="INR"
                          type="text"
                          onChange={handleChange("amount_received")}
                          value={values.amount_received}
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <label className="required col-form-label col-lg-3">
                        Payment Date
                      </label>
                      <div className="col-lg-6">
                        <input
                          id="ember557"
                          className="ember-text-field ember-view form-control"
                          placeholder="31/10/2021" //{Date()}
                          type="date"
                          onChange={handleChange("payment_date")}
                          value={values.payment_date}
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <label className="col-form-label col-lg-3">
                        Payment Mode
                      </label>
                      <div className="col-lg-6">
                        <div id="ember552" className="type-ahead ember-view">
                          <div
                            id="ember553"
                            className="dropdown show ac-dropdown ember-view"
                          >
                            <div
                              className="auto-select ac-selected"
                              tabIndex="-1"
                            >
                              <div
                                className="ember-text-field form-control ac-search-txt ember-view"
                                placeholder="Saturation"
                              >
                                <select
                                  className="box"
                                  onChange={handleChange("payment_mode")}
                                  value={values.payment_mode}
                                  style={{
                                    padding: "8px 162px 2px 0px",
                                    marginLeft: "-12px",
                                    marginTop: "-20px",
                                    border: "none",
                                  }}
                                >
                                  <option value="Bank_Remittance">
                                    Bank Remittance
                                  </option>
                                  <option value="Bank_ransfer">
                                    Bank Transfer
                                  </option>
                                  <option value="Cash">Cash</option>
                                  <option value="Check">Check</option>
                                  <option value="Credit_Card">
                                    Credit Card
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row form-group">
                      <label className="required col-form-label col-lg-3">
                        Despoist To
                      </label>
                      <div className="col-lg-6">
                        <div id="ember552" className="type-ahead ember-view">
                          <div
                            id="ember553"
                            className="dropdown show ac-dropdown ember-view"
                          >
                            <div
                              className="auto-select ac-selected"
                              tabIndex="-1"
                            >
                              <div
                                className="ember-text-field form-control ac-search-txt ember-view"
                                placeholder="Saturation"
                              >
                                <select
                                  className="box"
                                  onChange={handleChange("despoist_to")}
                                  value={values.despoist_to}
                                  style={{
                                    padding: "8px 88px 2px 0px",
                                    marginLeft: "-12px",
                                    marginTop: "-20px",
                                    border: "none",
                                  }}
                                >
                                  <option value="Pretty_Cash">
                                    Pretty Cash
                                  </option>
                                  <option value="Undeposited_Funds">
                                    Undeposited Funds
                                  </option>
                                  <option value="Employee_Reimbursements">
                                    Employee Reimbursements
                                  </option>
                                  <option value="TDS_Payable">
                                    TDS Payable
                                  </option>
                                  <option value="Capital_Stock">
                                    Capital Stock
                                  </option>
                                  <option value="Distributions">
                                    Distributions
                                  </option>
                                  <option value="Dividends_Paid">
                                    Dividends Paid
                                  </option>
                                  <option value="Drawings">Drawings</option>
                                  <option value="Investments">
                                    Investments
                                  </option>
                                  <option value="Opening_Balance_Offset">
                                    Opening Balance Offset
                                  </option>
                                  <option value="Owners_Equity">
                                    Owner's Equity
                                  </option>
                                  <option value="Employee_Advance">
                                    Employee Advance
                                  </option>
                                  <option value="TDS_Receivable">
                                    TDS Receivable
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row form-group">
                      <label className="col-form-label col-lg-3">
                        Reference#
                      </label>
                      <div className="col-lg-6">
                        <input
                          id="ember557"
                          className="ember-text-field ember-view form-control"
                          placeholder=""
                          type="text"
                          onChange={handleChange("reference")}
                          value={values.reference}
                        />
                      </div>
                    </div>
                    <br />

                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Invoice No</TableCell>
                            <TableCell align="right">Invoice Amount</TableCell>

                            <TableCell align="right">Amount Due</TableCell>
                            <TableCell align="right">Payment</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.date}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.date}
                              </TableCell>
                              <TableCell align="right">{row.bill}</TableCell>
                              <TableCell align="right">
                                {row.purchaseorder}
                              </TableCell>
                              <TableCell align="right">
                                {row.billamount}
                              </TableCell>
                              <TableCell align="right">
                                {row.amountdue}
                              </TableCell>
                              <TableCell align="right">{row.payment}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <br />
                    <br />
                    <br />

                    <div className={classes.billamt}>
                      <div className="d-flex flex-row-reverse bd-highlight">
                        <div className="p-2 bd-highlight">
                          <div className={classes.borderdashed}>
                            <div className={classes.amountright}>
                              <p>Amount Recived</p>
                              <p>Amount used for Payments:</p>
                              <p>Amount Refunded:</p>
                              <p>Amount in Excess:</p>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className={classes.amountright}>
                              <p>{values.amount_received}</p>
                              <p>0.00</p>
                              <p>0.00</p>
                              <p>Rs.{values.amount_received}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div>
                      <label className="">
                        <p>Notes (Internal use. Not visible to customer)</p>
                      </label>
                      <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder=""
                        style={{ width: "100%" }}
                      />
                    </div>
                    <br />
                    <div>
                      <p>
                        Additional Fields: Start adding custom fields for your
                        payments made by going to Settings Preferences Payments
                        Recived.
                      </p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <Box className={classes.footerbar}>
                      <Paper
                        sx={{ position: "fixed", bottom: 2, left: 5, right: 0 }}
                        elevation={2}
                      >
                        <BottomNavigation>
                          <Stack spacing={1} direction="row">
                            <Button
                              variant="contained"
                              className={classes.save}
                              type="submit"
                            >
                              Save
                            </Button>
                            <Button variant="outlined">Cancel</Button>
                          </Stack>
                        </BottomNavigation>
                      </Paper>
                    </Box>
                  </form>
                </div>
              </div>
            </div>
          </Box>
        </Container>

        <div></div>
      </div>
    </>
  );
}
export default Addbill;
