import axios from "axios"

const uri = import.meta.env.VITE_API_URL;


const company_data = async ()=>{
    try {
        const response = await axios.get(`${uri}/company`);
        return response;
        
    } catch (error) {
        
    }
}

const details= async (token)=>{
    try {
        const response = await axios.get(`${uri}/company_details`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        
        return response.data;
    } catch (error) {
        console.error(error)
        
    }

}
const company_register = async (data) => {
    try {
        const response = await axios.post(`${uri}/register`, data);
        console.log(response.data)
        return response;

    } catch (error) {
        console.error(error)

    }
}


const employee_register = async (data,token) => {
    console.log(token)
    try {
        const response = await axios.post(`${uri}/register/employee`, data, {
            headers: { Authorization: `Bearer ${token}` }

        });
        return response;

    } catch (error) {
        console.error(error)

    }


}

const login = async (data)=>{
    try {
        const response = await axios.post(`${uri}/login`,data)
        return response.data;
    } catch (error) {
        console.log(error)
        
    }
}

const delete_company_employe = async (id,token)=>{
    try {
        const response = await axios.delete(`${uri}/delete/${id}`,{
            headers: { Authorization: `Bearer ${token}` }

        })
        return response
        
    } catch (error) {
        console.log(error)
    }

}

const update_company_employee = async (id,data,token)=>{
    try {
        const response = await axios.patch(`${uri}/update/${id}`,data,{
            headers: { Authorization: `Bearer ${token}` }

        })
        return response
        
    } catch (error) {
        console.log(error)
    }

}

export {
    company_data,
    details,
    company_register,
    employee_register,
    login,
    delete_company_employe,
    update_company_employee
}
