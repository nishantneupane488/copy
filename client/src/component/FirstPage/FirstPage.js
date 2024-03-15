import Raect from "react";
import "./FirstPage.css"
import { Navigate, useNavigate } from "react-router-dom";
function FirstPage(){
const nevigate=useNavigate();

function ToRouteNextPage(){
    nevigate("/fpfr");
}


return <>
 <div className="First-Page">
<div className="center">
    <h1>
  Welcome,
    </h1>
    <h2>
        Hotel Management System
    </h2>
    <button onClick={ToRouteNextPage}>
Book Now
    </button>
</div>

 </div>
    </>

}
export default FirstPage;