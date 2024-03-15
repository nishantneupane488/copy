import React, { useState } from 'react'
import Navbar from '../MainPage/Navbar/Navbar'
import "./BookingPage.css"

import { useLocation, useNavigate } from "react-router-dom";
export default function BookingPage() {

  const nevigate=new useNavigate();
  const location=new useLocation();
 const[inputtaking,setinputtaking]=useState({username:"", email:"",fromdate:"",todate:"",phone:"",address:""})


function Datafromuser(e){
  setinputtaking({ ...inputtaking, [e.target.name]: e.target.value })

}
  

function BookingBills(){
  console.log(location.state)
nevigate("/bookingbill",{state:{message2:location.state.message,
                                name2:location.state.name,
                                hotelId2:location.state.hotelId,
                                roomprice2:location.state.roomprice,
                                inputsend:inputtaking


                                
}})



}
  return (
   <>

<Navbar />
    <div className="main-1">
      <h1>User Details</h1>
      <form>
        <div className="input_taking">
          <input className="taker" type="text" name='username' placeholder="User Name" value={inputtaking.username}  onChange={Datafromuser}  />


          <input className="taker" type="text" name='email' placeholder="Email" value={inputtaking.email}   onChange={Datafromuser} />
          <input className="taker" type="date" name='fromdate'   onChange={Datafromuser} value={inputtaking.fromdate} />
          <input className="taker" type="date" name='todate'     onChange={Datafromuser}  value={inputtaking.todate} />
         
          {/* <input className="taker" type="text" name='roomprice'  placeholder="Id-proof" value=""/> */}
          <input className="taker" type="number" name='phone'  placeholder="Phone No" value={inputtaking.phone}   onChange={Datafromuser} />
          <input className="taker" type="text" name='address'  placeholder="Addresh" value={inputtaking.address}  onChange={Datafromuser} />
{/* 
          <input className="taker" type="number" name='roomstatus' placeholder="Room" value="roomstat" />
          <input className="taker" type="text" name='imgurl'  value="imgurl"/> */}

        </div>
      </form>
      <button className="Add_Hotel" onClick={BookingBills} >Pay Now</button>
    </div>
   </>
  )
}
