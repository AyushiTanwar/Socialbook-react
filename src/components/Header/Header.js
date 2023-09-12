import React, { useState } from "react";
import {
  FaWallet,
  FaHouzz,
  FaUsers,
  FaPlus,
  FaFacebookMessenger,
} from "react-icons/fa";
import Main from "../Main/Main";
import { Link } from "react-router-dom";

export default function Header({ dialogOpen }) {
  const [open,setOpen]=useState(false)
  return (
    <div>
      <div style={{ height: "4rem", backgroundColor: "black" }}>
        <img
          src="https://th.bing.com/th/id/OIP.FfbSuynoqcSYgo-LiZllHQHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="logo"
          style={{
            height: "5rem",
            width: "5rem",
            borderRadius: "5rem",
            marginLeft: "1rem",
          }}
        ></img>

        <input
          type="search"
          placeholder="Search"
          style={{
            height: "2rem",
            borderRadius: "1rem",
            position: "absolute",
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        ></input>

        <FaHouzz
          style={{ color: "white", marginLeft: "34rem", fontSize: "1.6rem" }}
        />
        <FaUsers
          style={{ color: "white", marginLeft: "4rem", fontSize: "1.6rem" }}
        />
        <FaWallet
          style={{ color: "white", marginLeft: "4rem", fontSize: "1.6rem" }}
        />
        <FaPlus
          style={{ color: "white", marginLeft: "29rem", fontSize: "1.6rem" }}
          onClick={() => setOpen(!open)}
          // onClick={() => {
          //   dialogOpen(true);
          // }}
        />
        <FaFacebookMessenger
          style={{ color: "white", marginLeft: "2rem", fontSize: "1.6rem" }}
        />
        <img
          src="https://th.bing.com/th/id/OIP.Z7JdFx7ngds2_i4VoY6_JQHaFk?pid=ImgDet&rs=1"
          alt="logo"
          style={{
            height: "3rem",
            width: "3rem",
            borderRadius: "5rem",
            marginLeft: "1rem",
            marginLeft: "2rem",
          }}
        ></img>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Link
          to="/signin"
          style={{
            display: "flex",
            justifyContent: "end",
            marginRight: "1rem",
          }}
        >
          {" "}
          <button
            type="submit"
            style={{
              padding: ".6rem",
              width: "6rem",
              borderRadius: "1rem",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Logout
          </button>
        </Link>
      </div>
      <div>
              {open?<div style={{border:"5px solid black",paddingBottom:"1rem",width:"25rem",marginLeft:"35rem"}}>
      <div style={{display:"flex",justifyContent:"center",paddingTop:"2rem",}}>
    <textarea></textarea>
    </div>
    <div style={{display:"flex",justifyContent:"center",marginLeft:"6rem",padding:"1rem"}}>
        <input type="file"></input>
        </div>
    </div>:null}
      
   
         </div>
    </div>
  );
}
