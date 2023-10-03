import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const PrivateComponent = () =>{
    const auth = localStorage.getItem('role');
    return auth==='admin' ? <Outlet /> : <Navigate to="login" />
    
}

export default PrivateComponent;