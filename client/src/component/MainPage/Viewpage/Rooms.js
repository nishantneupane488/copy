import React, {useEffect, useState } from "react"
import "./Rooms.css"
import axios from "axios"

import { useNavigate } from "react-router-dom"

function Rooms(props){

const nevigate=new useNavigate();

function Booked(){
 nevigate("/bookingpage",{state:{message:props.gdata.imgurl,
                   name:props.gdata.room,
                   hotelId:props.gdata._id,
                   roomprice:props.gdata.roomprice

}})

}

    
  
    return <>
        <div className="Rooms-one">
            <div className="RoomImage"> 
      
        
            <img src={props.gdata.imgurl} width={350} height={210}/>
        
             </div>
            <div className="RoomData"> 
            
                <h1 className="RoomData-2">{props.gdata.room}</h1>
                {/* <h4 className="RoomData-2">{props.gdata.roomNo}</h4> */}
                <h2 className="RoomData-2">{props.gdata.roomtype}</h2>
                <h2 className="RoomData-2">${props.gdata.roomprice}
                <button className="btn_Rooms" onClick={Booked}> Book!</button>
                </h2>
                
            {/* ))} */}
      
            
           
            

            </div>
        </div>
    </>
}
 export default Rooms;