import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [signin, setsignin] = useState({
    email: "",
    password: "",
  });
  const [errors, seterrors] = useState({});

  const validate = () => {
    let obj = {};
    let error = false;
    if (!signin.email) {
      error = true;
      obj.email = "Email is required";
    }
    if (!signin.password) {
      error = true;
      obj.password = "Password is required";
    }
    seterrors(obj);
    return !error;
  };
  return (
    <>
      <div
        className="App"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            backgroundColor: "darkgrey",
            width: "20rem",
            padding: "3rem",
            marginTop: "7rem",
          }}
        >
          <h1>SignIn</h1>
          <div style={{ marginTop: "2rem" }}>
            Email:
            <div>
              <input
                type="email"
                onChange={(e) => {
                  setsignin({ ...signin, email: e.target.value });
                }}
              ></input>
              {errors.email ? <span style={{color:"red"}}>{errors.email}</span> : null}
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            Password:
            <div>
              <input
                type="password"
                onChange={(e) => {
                  setsignin({ ...signin, password: e.target.value });
                }}
              ></input>
              {errors.password? <span style={{color:"red"}}>{errors.password}</span>:null}
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Link to="/header">
              <button
                type="submit"
                style={{
                  padding: ".6rem",
                  width: "6rem",
                  borderRadius: "1rem",
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={() => {
                  validate();
                }}
              >
                SignIn
              </button>
            </Link>
          </div>
          <div>
            <a href="forgot">Forgotten Password</a>
          </div>
          <div>
            <button
              type="submit"
              style={{
                marginTop: ".6rem",
                cursor: "pointer",
                width: "9rem",
                borderRadius: "1rem",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Create new account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
