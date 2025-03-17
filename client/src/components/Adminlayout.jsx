import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";


const Adminlayout = ()=>{
    return (
        <div className="flex h-screen ">
            <Navbar/>
            <main className="mt-10 ml-64 w-full"> 
                <Outlet/>
            </main>
        </div>
    )
}
export default Adminlayout;

