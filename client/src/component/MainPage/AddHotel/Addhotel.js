import React, { createElement, useState } from "react";
import "./Addhotel.css"
import { useNavigate } from "react-router-dom"
// import {useNavigate} from "react-router-dom"
import Navbar from "../Navbar/Navbar";


function Addhotel() {
  const nevigate = useNavigate();
  const [credentials, setCredentials] = useState({ room: "", roomNo: "", roomtype: "", roomprice: "", roomstatus: "", imgurl: "" })

  const hitting_endpoint = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/Database1forRoom/add_hotel", {
      method: "post",
      headers: {

        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        room:credentials.room,
        roomNo:credentials.roomNo,
        roomtype: credentials.roomtype,
        roomprice: credentials.roomprice,
        roomstatus: credentials.roomstatus,
        imgurl: credentials.imgurl
      })
    })

    // console.log(credentials);
    // const json=await response.json();
    // console.log(json);
    alert("Hotel add scucessfully")
    console.log(credentials)
    nevigate("/fpfr");

    // }


  
  }
  function changer(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    // console.log(credentials);
  }
  


  return <>
    <Navbar />
    <div className="main-1">
      <h1>Add Hotels to Your Menu</h1>
      <form>
        <div className="input_taking">
          <input className="taker" type="text" name='room' placeholder="Room" value={credentials.room} onChange={changer} />


          <input className="taker"   placeholder="Room No" type="number" name='roomNo' value={credentials.roomNo} onChange={changer} />
          <input className="taker" type="text"   placeholder="Room Type" name='roomtype' value={credentials.roomtype} onChange={changer} />
          <input className="taker" type="number" name='roomprice'   placeholder="Room Price" value={credentials.roomprice} onChange={changer} />

          <input className="taker" type="number" name='roomstatus'  placeholder="Room Status" value={credentials.roomstatus} onChange={changer} />
          <input className="taker" type="text" name='imgurl'  placeholder="Hotel Img Link" value={credentials.imgurl} onChange={changer} />

        </div>
      </form>
      <button className="Add_Hotel" onClick={hitting_endpoint} >Add Hotels</button>
    </div>
  </>
}
export default Addhotel;
