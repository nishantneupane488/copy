import React, { useState } from 'react'
import Navbar from '../MainPage/Navbar/Navbar'
import "./BookingBill.css"
import { useLocation, useNavigate } from "react-router-dom";
import moment from 'moment';


export default function BookingBill() {


const navigate=useNavigate();
  
  const location = useLocation();
  const [imgurl,setimgurl]=useState(location.state.message2);
  const [namehotel,setnamehotel]=useState(location.state.name2);
  const [hotelId,sethotelId]=useState(location.state.hotelId2);
  const [price,setprice]=useState(location.state.roomprice2);

  // console.log(location.state.inputsend.username)
  const [username,setusername]=useState(location.state.inputsend.username);
  const [email,setemail]=useState(location.state.inputsend.email);
  const [fromdate,setfromdate]=useState(location.state.inputsend.fromdate);
  const [todate,settodate]=useState(location.state.inputsend.todate);
  const [phone,setphone]=useState(location.state.inputsend.phone);
  const [address,setaddress]=useState(location.state.inputsend.address);
  const [userCredential,setuserCredential]=useState({

    room:namehotel,hotelId:hotelId,username:username,email:email,fromdate:fromdate,todate:todate,phone:phone,address:address,price:price,imgurl:imgurl
  })
  var m1 = Date.parse(fromdate);
  var m2 = Date.parse(todate);    

  var diff=m2-m1;

  if(diff<0){
    alert("please select dates in-order")
  }else {
    diff=diff/86400000;

  }

const [total,settotal]=useState(diff*price);

const Complete= async(event)=>{


  event.preventDefault();
    await fetch("http://localhost:5000/api/Database1forRoom/user_data",{
method:"post",
headers:{
  'Content-Type':'application/json'
},
body:JSON.stringify({

room:namehotel,
roomidfromfront:hotelId,
username:username,
email:email,
fromdate:fromdate,
todate:todate,
phone:phone,
address:address,
price:price,
imgurl:imgurl,
    })

    })
    console.log(userCredential);
    alert("Room Booked")
    // navigate("./fprp")





// const bookingDetails={
//   room,
//   hotelId,
//   username,email,
//   fromdate,
//   todate,
//   phone,
//   address,
//   price,
//   imgurl
// }

// try {
//    const result = await axios.post('',bookingDetails)
//  } catch (error) {
  
// }

}




  return (
    <>
        <Navbar />
        <div className='B_B_main_1'>
        <h1 className='justforit'>Your Payable Aamount is ! </h1>

        <div className='B_B_main_12'>

<div className='B_B_main_121'>
  <img src={imgurl} height={600}  width={500}/>
</div>

<div className='B_B_main_121'>
<h2>{namehotel}</h2>
<h4>Booking id:{hotelId}</h4>
<h4>Check-In:{fromdate}</h4>
<h4>Chec-Out:{todate}</h4>
<h4>{username}</h4>
<h4>Phone:{phone}</h4>
<h4>Email:{email}</h4>
<h4>Addresh:{address}</h4>
{/* <br/> */}
<h4>Price/Day :${price}</h4>
<h2>Total amount- ${total}</h2>

<button className='btn_BB' onClick={Complete}> Complte</button>

</div>
            
        </div>
        </div>
    
    </>
  )
}
