import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import FirstPage from './component/FirstPage/FirstPage';
import Navbar from './component/MainPage/Navbar/Navbar';
import FirstPageForRoute from "./FirstPageForRoute";
import ViewPage from './component/MainPage/Viewpage/ViewPage';
import Addhotel from './component/MainPage/AddHotel/Addhotel'
import BookingPage from "./component/BookingModel/BookingPage";
import AvailbleRoom from "./component/BookingModel/AvailbleRoom";
import BookedRoom from "./component/BookingModel/BookedRoom";
import BookingBill from "./component/BookingModel/BookingBill";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import MappingBooked from "./component/BookingModel/MappingBooked";
import MapForAvail from "./component/BookingModel/MapForAvail";
import Update from "./component/BookingModel/Update";
function App() {

  // const location = useLocation()
  // const [imgurl,setimgurl]=useState()

  // setimgurl(location.state1)
  return (
    <>
      <div className="App">
        {/* <Navbar/> */}
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<FirstPage />} />
            <Route path="/fpfr" element={<FirstPageForRoute />} />
            <Route path="/addhotel" element={<Addhotel />} />
          
            <Route path="/bookingpage" element={<BookingPage />} />
            <Route path="/availbleroom" element={<AvailbleRoom />} />
            <Route path="/bookedroom" element={<BookedRoom />} />
            <Route path="/bookingbill" element={<BookingBill/>} />
            <Route path="/mappingbook" element={<MappingBooked/>} />
            <Route path="/mapforavail" element={<MapForAvail/>} />
            <Route path="/update" element={<Update/>} />


            {/* <Navbar/>
       <ViewPage/> */}

          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
