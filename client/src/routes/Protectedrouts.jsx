import { Navigate, Outlet } from "react-router-dom";
import { Provider } from "../context/contextProvider"
import { useEffect, useState } from "react";

const Protectedroute = ({ children }) => {
    const [isAuth, setIsAuth] = useState(true)    
    const token = false || localStorage.getItem("val")
    console.log("from protected" + token)
    useEffect(() => {
        setIsAuth(!!token)
    }, [token])

    return isAuth ? children : <Navigate to="/login" />;
}


export { Protectedroute }

