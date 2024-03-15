import React, {useState,  useEffect } from 'react'
import BookedRoom from './BookedRoom'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../MainPage/Navbar/Navbar';
export default function MappingBooked() {
    const location= new useLocation();

    // const temp=location.state
    
    const [availbleroom2,setavailbleroom2]=useState([]);
    useEffect(()=>{
       const temp=async()=>{
           try {
               const data= (await axios.get('/api/Database1forRoom/bookedhotel')).data
            //    console.log(data);
           
               setavailbleroom2(data.result);
           } catch (error) {
               console.log(error);
           }
       }
       temp();
     },[])
console.log(availbleroom2)

  return (<>

<Navbar/>

    <div className='poll'>
    {/* {availbleroom2.map(item=>{ */}
        {/* <BookedRoom   ggdata={availbleroom2} /> */}
    {/* })} */}

    {availbleroom2.map(items=>
    <BookedRoom className="poll2" key={items._id} gdata={items} />
)}
      
    </div>
    </>
  )
}
