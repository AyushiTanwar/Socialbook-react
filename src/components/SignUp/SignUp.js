import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [signup, setsignup] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    let obj = {};
    let error = false;
    if (!signup.email) {
      error = true;
      obj.email = "Email is required!";
    }
    if (!signup.password) {
      error = true;
      obj.password = "Password is required";
    }
    if (!signup.confirmPassword) {
      error = true;
      obj.confirmPassword = "Confirm password is required";
    } else if (signup.password != signup.confirmPassword) {
      error = true;
      obj.confirmPassword = "Password and confirm password should be same";
    }
    setErrors(obj);
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
          <h1>SignUp</h1>
          <div style={{ marginTop: "2rem" }}>
            Email:
            <div>
              {" "}
              <input
                type="email"
                onChange={(e) => {
                  setsignup({ ...signup, email: e.target.value });
                }}
              ></input>
              {errors.email ? (
                <span style={{ color: "red" }}>{errors.email}</span>
              ) : null}
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            Password:
            <div>
              {" "}
              <input
                type="password"
                onChange={(e) => {
                  setsignup({ ...signup, password: e.target.value });
                }}
              ></input>
              {errors.password ? (
                <span style={{ color: "red" }}>{errors.password}</span>
              ) : null}
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            Confirm Password:
            <div>
              {" "}
              <input
                type="password"
                onChange={(e) => {
                  setsignup({ ...signup, confirmPassword: e.target.value });
                }}
              ></input>
              {errors.confirmPassword ? (
                <span style={{ color: "red" }}>{errors.confirmPassword}</span>
              ) : null}
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            {/* <Link to="/signin"> */}{" "}
            <button
              type="submit"
              style={{
                padding: ".6rem",
                width: "6rem",
                borderRadius: "1rem",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={() => {
                if (validate()) {
                  navigate("/signin");
                }
              }}
            >
              Signup
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
