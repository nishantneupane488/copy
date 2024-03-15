import Raect ,{useEffect,useState} from "react";
import "./ViewPage.css"
import Rooms from "./Rooms"
// import RightFilter from "./RightFilter"
import Buttons from "./Buttons"
import axios from "axios"

function ViewPage(){

    const [dataq,setDataq]=useState([]);
    useEffect(()=>{
       const temp=async()=>{
           try {
               const data= (await axios.get('/api/Database1forRoom/getallrooms')).data
            //    console.log(data);
           
               setDataq(data.rooms);
           } catch (error) {
               console.log(error);
           }
       }
       temp();
     },[])
console.log(dataq)

    return (
        <>
    <div className="scrollRemover">
<div className="View-Area">
{dataq.map(items=>
    <Rooms key={items._id} gdata={items} />
)}


</div>
<div className="view-Area-filter">
<Buttons/>
</div>
 </div>
        </>
    )
}

export default ViewPage