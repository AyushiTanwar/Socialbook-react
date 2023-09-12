import React, { useEffect } from "react";
import Header from "../Header/Header";

export default function Main(props) {
  useEffect(() => {
    console.log(props.open);
  }, [props.open]);

  return (
    <>
      <Header />
      {props.open ? (
        <div>
          <div
            style={{
              border: "5px solid black",
              paddingBottom: "1rem",
              width: "25rem",
              marginLeft: "35rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
              }}
            >
              <textarea></textarea>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "6rem",
                padding: "1rem",
              }}
            >
              <input type="file"></input>
            </div>
          </div>
        </div>
      ) : null}

      <div className="App" style={{ marginTop: "10rem" }}>
        <h1>WELCOME TO SOCIAL BOOK</h1>
      </div>
    </>
  );
}
