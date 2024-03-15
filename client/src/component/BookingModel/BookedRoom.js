import React, { useEffect, useState } from 'react'
import Navbar from '../MainPage/Navbar/Navbar'
import "./BookedRoom.css"
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function BookedRoom(props) {
// console.log(props.gdata.roomid2)
// const location =new useLocation();
// // console.log(location.state.imgurl)
const [got,setgot]=useState(props.gdata.phone);
// // console.log(gottendata)
// const img=[];
// gottendata.map((myList) =>{
// // console.log(myList.username)
//    img.push(myList.imgurl)
// }
// ); 

const Navigate= new useNavigate()
// console.log(img);
const ter=props.gdata.email
const [email,setemail]=useState({email:ter})
// console.log(ter)


 const canceling= async(event)=>{
  event.preventDefault();
 try {
   const response= await fetch("http://localhost:5000/api/Database1forRoom/cancel",{
method:"post",
headers: {

  'Content-Type':'application/json'
},
body:JSON.stringify({
  email:email.email
})

   })
 } catch (error) {
  console.log({error})
 }
alert("Item has Deleted")
// Navigate("./bookedroom")
}

function updatee(){
  Navigate("/update",{ state:{ phone:props.gdata.phone}})
}

  return (
    <>


  
      {/* <Navbar /> */}
      <div className='B_R_main'>

        {/* <div className='B_R_main_2'></div> */}

        <div className='B_R_MAIN_3'>

          <div className='B_R_main_3_1'>
            <div className='B_R_main_3_1_2'>
       
      
                <img src={props.gdata.imgurl} height={210} width={380}/>
                           

            </div>
            <div className='B_R_main_3_1_2'>
              <h1> {props.gdata.room}</h1>
              <h2> {props.gdata.fromdate} -- {props.gdata.todate} </h2>
              <h2>{props.gdata.phone} </h2>
            </div>
            <div className='B_R_main_3_1_2'>
              <button className='btn_brmain'  onClick={canceling}><h2>Cancel</h2></button>
              <button className='btn_brmain' onClick={updatee}><h2>Update</h2></button>
            </div>
          </div>

        


        

          

        
          

        </div>
      </div>
    </>
  )
}




 {/* <img src={gottendata[0].imgurl} height={210} width={380}/> */}
              {/* {gottendata.map(item=>{
                <img src={item.imgurl} height={210} width={380}/>
              })} */}