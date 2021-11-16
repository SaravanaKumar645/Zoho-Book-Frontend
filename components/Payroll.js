import Image from "next/image";
import React from "react";
import PayrollLogo from "../public/zoho-payroll-logo.svg";
import Addpayroll from "../public/vector14.svg";
import Approvepayroll from "../public/vector15.svg";
import Makepayroll from "../public/vector16.svg";
import ManageEmployee from "../public/manageemployee.svg";
import StatutoryComponents from "../public/Statutorycomponents.svg";
import EmployeePortal from "../public/employeeportal.svg";
import FlexiblePayment from "../public/flexiblepayment.svg";
import Loans from "../public/loans.svg";
import EasytoSwitch from "../public/Easytoswitch.svg";
import styles from "./Payroll.module.css";
import Link from "next/link";

function Payroll() {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.logo}>
          <Image src={PayrollLogo} alt="nil" />
        </div>
        <p className={styles.stream}>
          Streamline payroll operations and pay your employees on time.
        </p>
        <Link href="https://www.zoho.com/in/payroll/">
          <a target="_blank" className={styles.trybutton}>
            Try Payroll
          </a>
        </Link>
        <div className={styles.images}>
          <div className={styles.svgs}>
            <Image src={Addpayroll} alt="nil" />
            <p>Add Payroll Inputs</p>
          </div>
          <div className={styles.svgs}>
            <Image src={Approvepayroll} alt="nil" />
            <p>Approve Payroll</p>
          </div>
          <div className={styles.svgs}>
            <Image src={Makepayroll} alt="nil" />
            <p>Make Payments</p>
          </div>
        </div>
        <div className={styles.lower}>
          <p className={styles.stream1}>
            Powerful features that make running payroll a breeze
          </p>
          <div className={styles.content}>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={ManageEmployee} alt="nil" />
              </div>
              <h4 className={styles.header}>Manage your employees</h4>
              <p className={styles.bodies}>
                Add all your employees information easily and process their
                salary payments every month.
              </p>
            </div>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={StatutoryComponents} alt="nil" />
              </div>
              <h4 className={styles.header}>Statutory Components</h4>
              <p className={styles.bodies}>
                Stay compliant with the Government mandated schemes such as EPF,
                ESI and LWF which provide several benefits to your employees.
              </p>
            </div>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={EmployeePortal} alt="nil" />
              </div>
              <h4 className={styles.header}>Employee Portal</h4>
              <p className={styles.bodies}>
                Enable employees to access their payslips and perform payroll
                related activities like Income Tax Declaration and Proof of
                Investment submission through the dedicated employee
                self-service portal.
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={FlexiblePayment} alt="nil" />
              </div>
              <h4 className={styles.header}>Flexible Payment Methods</h4>
              <p className={styles.bodies}>
                You can either automate salary payments through direct bank
                transfers or you can manually write your employees cheques.
              </p>
            </div>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={Loans} alt="nil" />
              </div>
              <h4 className={styles.header}>Handle Employee Loans</h4>
              <p className={styles.bodies}>
                Record the loans that you&apos;ve issued to your employees and
                collect repayments as a part of each month&apos;s pay run.
              </p>
            </div>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={EasytoSwitch} alt="nil" />
              </div>
              <h4 className={styles.header}>Easy to Switch</h4>
              <p className={styles.bodies}>
                You can move all your past data from your existing system and
                we&apos;ll ensure there is no duplicate or missing paperwork so
                you can continue without a hitch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payroll;
