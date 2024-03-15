import React from "react";
import ViewPage from "./component/MainPage/Viewpage/ViewPage";
import Navbar from "./component/MainPage/Navbar/Navbar";



function FirstPageForRoute(){
    return <>
        <Navbar/>
        <ViewPage/>
    </>
}

export default FirstPageForRoute;