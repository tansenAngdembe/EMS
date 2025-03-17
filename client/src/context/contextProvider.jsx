import { createContext, useContext, useState, useEffect } from "react";
import { details,company_data } from "../services/api"

const ContextProvider = createContext(null);


const AppProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [companyData, setCompanyData] = useState([]);
    const [company,setComapny] = useState([])
   
    const sessionValue = localStorage.getItem("val")
    // console.log(companyData)
    // const email = companyData?.company?.email
    const fetchData = async () => {
        const allDetails = await details(sessionValue);
        const data =await company_data()
        setComapny(data.data.data)          
        setCompanyData(allDetails)

    }
    // console.log(companyData)
    useEffect(() => {
        fetchData()       
        if (!sessionValue) {
            setToken("")
        }
        setToken(sessionValue)
    }, [sessionValue])


    return (
        <ContextProvider.Provider value={{
            token, companyData,fetchData,setCompanyData,company
        }}>{children}</ContextProvider.Provider>
    )

}

const Provider = () => {
    return useContext(ContextProvider)
}


export { AppProvider, Provider }


