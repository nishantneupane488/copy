import React, { useState } from 'react'
import "./Update.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Update() {

const [credential, setCredential]=useState({name:"",address:"",email:"", fromdate:""});


const location=new useLocation();
console.log(location.state.phone)

const nevigate=new useNavigate();

const hitting_endpoint2 = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/Database1forRoom/update", {
      method: "post",
      headers: {

        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:credential.name,
        address:credential.address,
        email: credential.email,
        phone:location.state.phone,
        fromdate:credential.fromdate
       
      })
    })

    // console.log(credentials);
    // const json=await response.json();
    // console.log(json);
    alert("Updated add scucessfully")
    console.log(credential)
    nevigate("/fpfr");

    // }


  
  }





    function changer(e) {
        setCredential({ ...credential, [e.target.name]: e.target.value })
        // console.log(credentials);
      }

  return (
    <div>
      <form>      
  <input name="name" type="text" class="feedback-input"  value={credential.name} onChange={changer}placeholder="Name" />   
  <input name="email" type="text" class="feedback-input"  value={credential.email} placeholder="Email"  onChange={changer}/>
  <input name="fromdate" type="date" class="feedback-input"  value={credential.fromdate} placeholder="fromdate"  onChange={changer}/>
  <textarea name="address"  type="text" class="feedback-input"  value={credential.address} placeholder="Address" onChange={changer}></textarea>
  <input type="submit"  onClick={hitting_endpoint2} value="SUBMIT"/>
</form>


    </div>
  )
}
