import React,{useEffect,useState} from 'react'
import AvailbleRoom from './AvailbleRoom'
import axios from 'axios';
import BookedRoom from './BookedRoom';

export default function MapForAvail() {
  
  
  const rahul="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg"
  
  const [availbleroom3,setavailbleroom3]=useState([]);
    useEffect(()=>{
       const temp=async()=>{
           try {
               const data= (await axios.get('/api/Database1forRoom/getallrooms')).data
            //    console.log(data);
           
               setavailbleroom3(data.rooms);
           } catch (error) {
               console.log(error);
           }
       }
       temp();
     },[])


     const [availbleroom4,setavailbleroom4]=useState([]);
    useEffect(()=>{
       const temp=async()=>{
           try {
               const data= (await axios.get('/api/Database1forRoom/bookedhotel')).data
            //    console.log(data);
           
               setavailbleroom4(data.result);
           } catch (error) {
               console.log(error);
           }
       }
       temp();
     },[])

let booked1=[];


for (let i = 0; i < availbleroom4.length; i++) {
  for (let j = 0; j< availbleroom3.length; j++) {

    let temp1=availbleroom4[i].roomid2;
    let temp2=availbleroom3[j]._id

    if((temp1!=temp2)){
      booked1.push(availbleroom3[j])
    }

    
  }
    
}
// function removeDuplicates(arr) {
//   return arr.filter((item,
//       index) => booked1.indexOf(item) === index);
// }
// removeDuplicates(booked1);
// let tt=[]
// tt= removeDuplicates(booked1)
// function removeDuplicates(booked1) {
//   let unique = [];
//   booked1.forEach(element => {
//       if (!unique.includes(element)) {
//           unique.push(element);
//       }
//   });
  
//   return unique;
// }
// let rf=[];
// for(let i=0;i<availbleroom4;i++){
// let temp=availbleroom4[i].roomid2;

// for(let j=0;j<booked1;j++) {
//               if(temp!=booked1[j]._id){
//                 rf.push(booked1[j])
//               }
// }

// }
// console.log(removeDuplicates(booked1));

   
booked1 = booked1.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t._id === value._id 
  ))
)


console.log(booked1)
// console.log(availbleroom4)
  // console.log(availbleroom4)
  // console.log(availbleroom3)
  
  
  
  
  return (
    <div>
      
     

      <AvailbleRoom  temp={rahul}/>
    </div>
  )
}
