import React, { useState } from "react";

import { useRouter } from "next/router";

import { signin, authenticate, isAutheticated } from "../services/Auth";

import Link from "next/link";
import styles from "../styles/AuthForm.module.css";

const Signin = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email: email, password: password })
      .then((data) => {
        if (!data) {
          // setValues({ ...values, error: data.error, loading: false });
        } else {
          // console.log(user.email)

          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    console.log(didRedirect);

    if (didRedirect) {
      router.push("/dashboard");
    }
    if (isAutheticated()) {
      // console.log(user._id)
      router.push("/dashboard");
    }
    //  if(values.didRedirect){
    //    return router.push('/home')
  };

  const errorMessage = () => {
    return (
      // <div className="alertinvalid">
      //   <div className="errormsg" style={{ display: values.error ? "" : "none" }}>
      //     {values.error}
      //   </div>
      // </div>

      <div className="row">
        <div className="col-md-3 offset-sm-2 text-left">
          <div
            className="alert alert-danger"
            style={{ display: values.error ? "" : "none" }}
          >
            {values.error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className={styles.reg}>
        <div className={styles.auth}>
          <h2 style={{ color: "#008cba" }}>Codingmart Books Login</h2>
          <br />
          {/* <div className="row">
        <div className="col-md-6 offset-sm-3 text-left"> */}
          <form>
            <div>
              <label>Email</label>
              <input
                onChange={handleChange("email")}
                value={values.email}
                type="email"
              />
            </div>

            <div>
              <label>Password</label>
              <input
                onChange={handleChange("password")}
                value={values.password}
                type="password"
              />
            </div>
            <div style={{ color: "red" }}> {errorMessage()} </div>

            <button
              onClick={onSubmit}
              className={styles.button}
              style={{ borderRadius: "4px" }}
            >
              Submit
            </button>
          </form>
          <p>
            Don't have an account yet?
            <p style={{ color: "blue" }}>
              {" "}
              <Link href="/register" style={{ color: "blue" }}>
                {" "}
                Register
              </Link>
            </p>
          </p>
          {/* </div>
      </div> */}
        </div>
      </div>
    );
  };

  return (
    //<div style={{ padding:"200px"}}>

    <>
      {/* {loadingMessage()} */}
      {/* {errorMessage()} */}
      {signInForm()}

      {performRedirect()}
    </>

    //</div>
  );
};

export default Signin;
